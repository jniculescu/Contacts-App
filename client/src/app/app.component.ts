import {Component, Injectable} from '@angular/core';
import {UserService} from "./user/service/user.service";
import {NavigationEnd, Router} from "@angular/router";
import * as _ from 'lodash';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()

export class AppComponent {

  user;
  showSidenav: boolean;

  constructor(private userService: UserService, private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(_.isEqual(event.urlAfterRedirects, '/')|| _.isEqual(event.urlAfterRedirects, '/login')){
          this.showSidenav = false;
          return;
        }
        this.showSidenav = true;
      }
    })

  }

  userInfo(userName){
    this.userService.getUser(userName).subscribe((res) => {
      this.user = res;
    });
  }

}
