import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionApiService } from '../../api/subscription-api.service';
import { SubscriptionForm } from '../../subscription-form';
import { SubscriptionCreateResponse } from '../../subscription-create-response';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-subs-form',
  templateUrl: './subs-form.component.html',
  styleUrls: ['./subs-form.component.css']
})

export class SubsFormComponent implements OnInit, OnDestroy {

  data: any = {};
  transactionTypeSelect = ['Monthly','Weekly','Daily'];
  transactionTypeSelectMap: {[key:number]:string} = {1:'Daily', 2:'Weekly',3:'Monthly'};

  model = new SubscriptionForm(0.0, this.transactionTypeSelectMap[1], '', '','','');
  public finalResult: SubscriptionCreateResponse = new SubscriptionCreateResponse(null,0,'','','','','','');

  sub:Subscription;

  constructor(private route: ActivatedRoute, private router: Router,private subscriptionService: SubscriptionApiService) { }
  submitted = false;

  ngOnInit(): void {
  }

  
  save(form: NgForm) {
    this.subscriptionService.save(form).subscribe((result) => {
      console.log(result);
      this.finalResult = new SubscriptionCreateResponse(result.id, result.amount, result.subscriptionType, result.subscriptionStartDate, 
        result.subscriptionEndDate,result.invoiceDateRecord,result.remarks, result.creationStatus);
    }, error => {
      this.finalResult = new SubscriptionCreateResponse(error.id, error.amount, error.subscriptionType, error.subscriptionStartDate, 
        error.subscriptionEndDate,error.invoiceDateRecord,error.remarks,'Failed');
    });
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
