import { Injectable } from '@angular/core';
import { Store } from './store';
import { GlobalState } from './global-state';

@Injectable({ providedIn: 'root' })
export class GlobalStore extends Store<GlobalState> {
   constructor() {
      super(new GlobalState());
   }

   setBusy(isBusy: boolean) {
      this.setState({ ...this.state, IsBusy: isBusy });
   }
   
   setActionMode(item: any) {
      this.setState({ ...this.state, Action: item });
   }
   getActionMode() {
      return this.state.Action;
   }

   getXAPIKey() {
      return this.state.xAPIKey;
   }
   getApiUrl() {
      return this.state.apiUrl;
   }

   getDateInFormat_yyyyMMdd(){
      const toString = (date: number, padLength: number) => {
         return date.toString().padStart(padLength, '0');
       };
       const date = new Date();
       const dateTimeNow = toString(date.getFullYear(), 4) + toString(date.getMonth() + 1, 2) + toString(date.getHours(), 2);
       return dateTimeNow;
   }

   setUserEmail(email: string){
      this.setState({...this.state, UserEmail: email});
   }
   getUserEmail(){
      return this.state.UserEmail;
   }
   
}
