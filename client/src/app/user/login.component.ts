import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  navigateToContacts() {
    this.userService.login(this.userName, this.password).subscribe(() => {
      this.router.navigate(['/contacts']);
    });

  }
}
