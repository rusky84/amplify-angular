import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


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


  constructor(private http: HttpClient) {
    //ßthis.get();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //var x = this.get();
    this.send();
    //this.get();
  }

  send(){
    var vBody = {};
    console.log(vBody);

    const bearers_token: string = 'eyJraWQiOiJrZzo3NzdlYTA2Ny1hNTAyLTQ1ZGEtODUwYy05YmQ5NDJmZTZiM2UiLCJhbGciOiJSUzI1NiJ9.eyJTZXJ2aWNlQWNjb3VudCI6IkNPTUFDVElWSVRZX1RSTiNtR21SczE4Y3hCeEtEZ01adVZxNDdVQk1XYUMtQWp1LWZQRUpleTBYaU1HRnFpTGYxZEFCcmgyLUdhYXBkUWt4Y3dXekw2c2daNkdQNnhvUlBiVk51QSIsIlRlbmFudCI6IkNPTUFDVElWSVRZX1RSTiIsIklkZW50aXR5MiI6ImU2ODU0NTE0LTZjNGYtNDIzMi1iZmM4LTA3YmNkMjhiZDIwMSIsIkVuZm9yY2VTY29wZXNGb3JDbGllbnQiOiIwIiwiZ3JhbnRfaWQiOiI0MDU4ODlkMi0wNGE5LTQ5ZDItYTFkNi01YzMwYzg1OGQ2ZGMiLCJJbmZvclNUU0lzc3VlZFR5cGUiOiJBUyIsImNsaWVudF9pZCI6IkNPTUFDVElWSVRZX1RSTn5iWTgwYUJZb3lzVGlZQmIxQWxPbXdja09RTjRLM2xFZmtKSXVnX3cwbzAwIiwianRpIjoiNDQ2Nzc1NDItZDI5Yi00MjFjLTgwYmMtNTY1YzlkMDgzZjMzIiwiaWF0IjoxNzA3MzUwODg2LCJuYmYiOjE3MDczNTA4ODYsImV4cCI6MTcwNzM1ODA4NiwiaXNzIjoiaHR0cHM6Ly9taW5nbGUtc3NvLnNlMi5pbmZvcmNsb3Vkc3VpdGUuY29tOjQ0MyIsImF1ZCI6Imh0dHBzOi8vbWluZ2xlLWlvbmFwaS5zZTIuaW5mb3JjbG91ZHN1aXRlLmNvbSJ9.h71UzNMDa37natb_b-xh9qYjOWhFW_EPmjRnbIcL2KigSMJ6wfEiVnOYeCKtDhk7Z3BBettJsZW6n0Gsy-zDZtB8Md8pZiIvcfpzLhkMK_1sky5RQGhzJAbPq-rPn5iwkT23GzlsKb-7DRvscRVYZJzn5CAr5_TJq9dc4wYg_A9fw4sZ4gDuwFBt-C8k9uPY7ccl_rso5YmtRNHZ4QiKkrPEsl7wbRbTf3H5I1IHN_GU3N7jwPsgEaHxUDYL-X-bzg86qtJ-YOw3KFi1pczBHAolQHQP7HbYzhRHIgX6z3-RvKCh9makgf78vlQrzXbD5DT1qBdCUL5IHq15KnrwQQ';
    const prog_trans_string: string  = '/MRS001MI/LstFields?MINM=MMS060MI&TRNM=LstBalID&TRTP=I';

    const myHeaders = new Headers();
    myHeaders.append('Accept', '*/*');
    myHeaders.append('Authorization', 'Bearer ' + bearers_token);

    debugger
    fetch('https://mingle-ionapi.se2.inforcloudsuite.com/COMACTIVITY_TRN/M3/m3api-rest/v2/execute/MRS001MI/LstFields?MINM=MMS060MI&TRNM=LstBalID&TRTP=I', {
      method: "GET",
      mode: "navigate",
      headers: myHeaders
    }).then(function(response) {
      debugger
      console.log(response);
      var x = response.text;
    }).catch(function(reason) {
      debugger
      var x = reason.text;
    });
  }

  get(){


      const bearers_token: string = 'eyJraWQiOiJrZzo3NzdlYTA2Ny1hNTAyLTQ1ZGEtODUwYy05YmQ5NDJmZTZiM2UiLCJhbGciOiJSUzI1NiJ9.eyJTZXJ2aWNlQWNjb3VudCI6IkNPTUFDVElWSVRZX1RSTiNtR21SczE4Y3hCeEtEZ01adVZxNDdVQk1XYUMtQWp1LWZQRUpleTBYaU1HRnFpTGYxZEFCcmgyLUdhYXBkUWt4Y3dXekw2c2daNkdQNnhvUlBiVk51QSIsIlRlbmFudCI6IkNPTUFDVElWSVRZX1RSTiIsIklkZW50aXR5MiI6ImU2ODU0NTE0LTZjNGYtNDIzMi1iZmM4LTA3YmNkMjhiZDIwMSIsIkVuZm9yY2VTY29wZXNGb3JDbGllbnQiOiIwIiwiZ3JhbnRfaWQiOiI0MDU4ODlkMi0wNGE5LTQ5ZDItYTFkNi01YzMwYzg1OGQ2ZGMiLCJJbmZvclNUU0lzc3VlZFR5cGUiOiJBUyIsImNsaWVudF9pZCI6IkNPTUFDVElWSVRZX1RSTn5iWTgwYUJZb3lzVGlZQmIxQWxPbXdja09RTjRLM2xFZmtKSXVnX3cwbzAwIiwianRpIjoiNDQ2Nzc1NDItZDI5Yi00MjFjLTgwYmMtNTY1YzlkMDgzZjMzIiwiaWF0IjoxNzA3MzUwODg2LCJuYmYiOjE3MDczNTA4ODYsImV4cCI6MTcwNzM1ODA4NiwiaXNzIjoiaHR0cHM6Ly9taW5nbGUtc3NvLnNlMi5pbmZvcmNsb3Vkc3VpdGUuY29tOjQ0MyIsImF1ZCI6Imh0dHBzOi8vbWluZ2xlLWlvbmFwaS5zZTIuaW5mb3JjbG91ZHN1aXRlLmNvbSJ9.h71UzNMDa37natb_b-xh9qYjOWhFW_EPmjRnbIcL2KigSMJ6wfEiVnOYeCKtDhk7Z3BBettJsZW6n0Gsy-zDZtB8Md8pZiIvcfpzLhkMK_1sky5RQGhzJAbPq-rPn5iwkT23GzlsKb-7DRvscRVYZJzn5CAr5_TJq9dc4wYg_A9fw4sZ4gDuwFBt-C8k9uPY7ccl_rso5YmtRNHZ4QiKkrPEsl7wbRbTf3H5I1IHN_GU3N7jwPsgEaHxUDYL-X-bzg86qtJ-YOw3KFi1pczBHAolQHQP7HbYzhRHIgX6z3-RvKCh9makgf78vlQrzXbD5DT1qBdCUL5IHq15KnrwQQ';
      const prog_trans_string: string  = '/MRS001MI/LstFields?MINM=MMS060MI&TRNM=LstBalID&TRTP=I';

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
      myHeaders.append('Authorization', 'bearer ' + bearers_token);



      //const queryStringParams = 'client_id='+this.client_id+'&client_secret='+ this.client_secret+'&username='+ this.saak+'&password='+ this.sask+'&grant_type=password'
      const queryURL = this.api_base_url + prog_trans_string;// + queryStringParams;
      debugger;
      const fetchPromise = fetch(queryURL,{
        method: "GET",
        headers: myHeaders,
        body: undefined
      });

      debugger

      fetchPromise
      .then((resp)=>{
        console.log(resp);
        alert(resp);
      })
      .catch((reason:any)=>{
        alert(reason);
      })
      .finally(()=>{
        alert('finally');
      });
debugger;
  }


}
