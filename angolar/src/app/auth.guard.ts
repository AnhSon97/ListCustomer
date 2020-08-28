import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from '../app/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate() {
    // logic
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      alert("Đăng nhập để sử dụng chức năng");
      return false;

    }
  }
}
