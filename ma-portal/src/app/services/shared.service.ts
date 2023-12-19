import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class SharedService {
   //private subject = new Subject<any>();
   private subject = new Subject<void>(); //later version
   sendClickEvent() {
      console.log("clicked");
      this.subject.next();
      console.log("event sent");
   }
   getClickEvent(): Observable<any> {
      return this.subject.asObservable();
   }
}
