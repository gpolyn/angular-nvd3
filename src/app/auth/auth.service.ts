import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const APP_SERVER = environment.url_base_path;
const USERNAME = 'user';
const PASSWORD = 'password';

@Injectable()
export class AuthService {

	private messages: Array<string> = [];
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  redirectUrl: string;

  constructor(private router: Router, private http: Http, private authHttp: AuthHttp) {
    // If authenticated, set local profile property and update login status subject
    if (this.authenticated) {
      this.setLoggedIn(true);
    }
  }

  getUnprotected() {
    console.log('getUnprotected');
    this.messages.push('Requesting unprotected resource');
    this.http
      .get(APP_SERVER + 'unprotected')
      .map((response: Response) => response.json())
      .subscribe(
      (data) => {
        this.messages.push(`Got unprotected response: ${data.message}`);
 
        this.login();
      },
      (error) => {
        this.messages.push(`Unprotected request error: ${error}`);
      }
      );
  }

  login(userData?: any): Promise<boolean> {
    let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return new Promise( (res, fail) => {
    this.http
      .post(APP_SERVER + 'auth', JSON.stringify(userData), options)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          // save the token in local storage
          let token = data.access_token;
          this._setSession({idToken: token})
          let redirect = this.redirectUrl ? this.redirectUrl : '/';
          this.getProtected();
          this.router.navigate([redirect]);
          res(true);
        },
        (error) => {
          console.log('login failure', error)
          this.messages.push(`Login failed: ${error}`);
          fail(true);
        }
      );
    });
  }

  getProtected() {
    console.log('getProtected');
    this.messages.push('Requesting protected resource');
    this.authHttp
      .get(APP_SERVER + 'protected')
      .map((response: Response) => response.json())
      .subscribe(
      (data) => {
        this.messages.push(`Got protected resource: msg: ${data.message}, identity: ${data.current_identity}`);
      },
      (error) => {
        this.messages.push(`Protected request failed: ${error}`);
      }
      );
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  private _setSession(authResult) {
    // Save session data and update login status subject
    localStorage.setItem('id_token', authResult.idToken);
    this.setLoggedIn(true);
  }

  logout() {
    // To log out, just remove the token 
    // from local storage
    localStorage.removeItem('id_token');
    let redirect = this.redirectUrl ? this.redirectUrl : '/';
    console.log('redirect', this.router.url );
		this.setLoggedIn(false);
    this.router.navigate(['/pages/404']);

    // Send the user back to the dashboard after logout
    // this.router.navigateByUrl('/pages/login');
  }

  get authenticated() {
    // Check if there's an unexpired access token
    return tokenNotExpired('id_token');
  }

}
