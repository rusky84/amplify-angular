import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from '../cookie/cookie.service';

export interface AuthToken
{
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number
  created_date_time: string;
}

@Injectable()
export class IonService {

  public api_base_url = `https://mingle-ionapi.se2.inforcloudsuite.com/COMACTIVITY_TRN/M3/m3api-rest/v2/execute`;
  public public_url = `https://mingle-sso.se2.inforcloudsuite.com:443/COMACTIVITY_TRN/as/`;
  public token_endpoint = `authorization.oauth2`;
  public client_id = `COMACTIVITY_TRN~bY80aBYoysTiYBb1AlOmwckOQN4K3lEfkJIug_w0o00`;
  public client_secret = `JhOAGxtz9jSHwClIn9he386aE-4TMSU-zrMUtQtraGSEzt4x0NDxe6rbLtV42fHoeDLJnOkI-5tfBjRv4p-e_g`;
  public refresh_token = ``;
  public token_type_hint = '';
  public grant_type = 'refresh_token';
  public saak = `COMACTIVITY_TRN#mGmRs18cxBxKDgMZuVq47UBMWaC-Aju-fPEJey0XiMGFqiLf1dABrh2-GaapdQkxcwWzL6sgZ6GP6xoRPbVNuA`;
  public sask = `wiffZOXtU4Xqtz5N7KLFC5-YWtbE0l-mLfl1lvFtfv5NzGIGeTfq0FX0qH8zhCsGhoHASRv81Q_NKkWzRY0P0w`;

  constructor(private _http: HttpClient, private _cookieService: CookieService) { }

  retrieveToken() {
    debugger;
    let params = new HttpParams();
    params.append('client_id', this.client_id);
    params.append('client_secret', this.client_id);
    params.append('refresh_token', this.refresh_token);
    params.append('token_type_hint', this.client_secret);
    params.append('grant_type', this.grant_type);
    debugger;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa(this.saak+':'+this.sask)
    });

    this._http
    .get(this.api_base_url + this.token_endpoint ,
       { headers: headers, params: params  })
    .subscribe(
        (data:any) => { // json data
          debugger;
          this.saveToken(data);
          console.log('Success: ', data);
        });

  }

  saveToken(token: AuthToken) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    this._cookieService.setCookie("access_token", token.access_token, expireDate);
  }

  getResource(resourceUrl: string) : Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + this._cookieService.getCookie('access_token')});
    return this._http.get(resourceUrl, { headers: headers });
  }

  clear() {
    this._cookieService.deleteCookie('access_token');
    window.location.reload();
  }

}
