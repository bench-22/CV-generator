import {Injectable} from '@angular/core';
import {getAuth, onAuthStateChanged, Auth} from '@angular/fire/auth';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserIsLoggedIn implements CanActivate {
  constructor(private router: Router, private auth: Auth) {
  }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          if (user.emailVerified) {
            user.getIdToken().then(token => {
              if (token) {
                resolve(true);
              } else {
                reject(this.router.navigateByUrl('/sessions/login'));
              }
            });
          }
        } else {
          reject(this.router.navigateByUrl('/sessions/login'));
        }
      });
    });
  }
}
