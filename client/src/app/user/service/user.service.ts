import { Injectable } from '@angular/core';
import {HttpService} from '../../contact/service/http.service';
import {Observable} from "rxjs";
import {AuthenticateService} from "./authenticate.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService {
  url = environment.endpointUrl;

  constructor(private auth: AuthenticateService,private http: HttpService) { }

  login(username:string, password:string): Observable<any>{
    return this.auth.authenticate(username, password);
  }

  getUser (userName: string): Observable<any>
  {
    return this.http.get(   this.url +'/user/' + userName).map((res) => {
      return res.json();
    } );
  }
}
