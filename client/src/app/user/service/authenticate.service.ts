import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpService} from "../../contact/service/http.service";

@Injectable()
export class AuthenticateService {


  private url: string = environment.endpointUrl + 'authenticate';

  constructor(private http: HttpService) { }

  authenticate(username: string, password: string){
    return this.http.post(this.url,{username: username, password: password}).map(response => {
      this.http.setToken(response.json());
        }
    );
  }

}
