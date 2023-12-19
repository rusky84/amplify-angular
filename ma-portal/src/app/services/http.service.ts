import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  
  sendGetRequest(apiName: string, apiUrl: string) {
    var url = apiUrl + apiName;
    return this.httpClient.get(url);
  }

  sendPostRequest(apiName: string, data: Object, apiUrl: string): Observable<any> {
    var url = apiUrl + apiName;
    return this.httpClient.post(url, data);
  }
  
}
