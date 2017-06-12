import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(public authService: AuthService) { }

}
