export class SubscriptionCreateResponse {

    constructor(
      public id: number,
      public amount: number,
      public subscriptionType: string,
      public subscriptionStartDate: string,
      public subscriptionEndDate: string, 
      public invoiceDateRecord: string, 
      public remarks: string,
      public creationStatus: string
    ) {  }
  
  }