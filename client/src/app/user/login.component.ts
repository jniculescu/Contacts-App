import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./service/user.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;


  constructor(private router: Router, private userService: UserService, private app: AppComponent) {

  }

  ngOnInit() {
  }

  navigateToContacts() {
    this.userService.login(this.userName, this.password).subscribe(() => {
      this.app.userInfo(this.userName);
      this.router.navigate(['/contacts']);
    });

  }
}
