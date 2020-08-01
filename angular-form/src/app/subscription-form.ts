export class SubscriptionForm {

    constructor(
      public amount: number,
      public subscriptionType: string,
      public subscriptionStartDate: string,
      public subscriptionEndDate: string, 
      public invoiceDateRecords: string, 
      public remarks: string
    ) {  }
  
  }