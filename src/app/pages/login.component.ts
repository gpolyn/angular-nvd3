import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router }      from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  success: boolean = true;
  userName: string = '';
  password: string = '';
  
  constructor(public authService: AuthService, public router: Router) { 
  }

  login() {
		console.log({name: this.userName, pass: this.password});
    this.authService.login({username: this.userName, password: this.password}).then( (x) => { this.success = true; }).catch(reason => {this.success = false;});
    // this.success = false;
  }

  onSubmit() {
    this.login();
  }
}
