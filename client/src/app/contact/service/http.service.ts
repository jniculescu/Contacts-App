import { Injectable } from '@angular/core';
import {
  Http, RequestOptions, Request, RequestOptionsArgs, Response, Headers,
  ConnectionBackend
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from "@angular/router";

@Injectable()
export class HttpService extends Http{

   private router1;
   private token: string;
   private authHeaderName: string = 'Authorization';
   private authHeaderBearerPrefix: string = 'Bearer ';

  constructor(backend: ConnectionBackend, options: RequestOptions, router: Router)
  {
    super(backend, options);
    this.router1 = router;
  }

  request(url: string|Request, options?: RequestOptionsArgs, router?: Router): Observable<Response> {

    if(typeof url === 'string'){
        if(!options){
          options = {headers: new Headers()};
        }
        options.headers.set(this.authHeaderName, this.authHeaderBearerPrefix + this.token);
    }
    else{
      url.headers.set(this.authHeaderName, this.authHeaderBearerPrefix + this.token);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService){
    return (res: Response) => {
      if (res.status === 401 || res.status === 403){
        console.log(res);
        this.setToken(this.token);
        alert("Error in credentials. Login again");
        this.router1.navigate(['/login']);
      }
      return Observable.throw(res);
    }
  }

  setToken(token:string){
    this.token = token;
  }

}
