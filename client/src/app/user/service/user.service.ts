import { Injectable } from '@angular/core';
import {HttpService} from '../../contact/service/http.service';
import {Observable} from "rxjs";
import {AuthenticateService} from "./authenticate.service";

@Injectable()
export class UserService {

  constructor(private auth: AuthenticateService) { }

  login(username:string, password:string): Observable<any>{
    return this.auth.authenticate(username, password);
  }
}
