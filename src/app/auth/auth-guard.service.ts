import { Injectable } from '@angular/core';
import { CanActivate, 
         CanActivateChild, 
				 RouterStateSnapshot,	
         Router, 
				 NavigationExtras,
         ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('canActivate', {authenticated: this.auth.authenticated});
		let url: string = state.url;
		return this.checkLogin(url);
  }

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

	checkLogin(url: string): boolean {
    if (this.auth.authenticated) { return true; }

    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/pages/login'], navigationExtras);
    return false;
  }

}
