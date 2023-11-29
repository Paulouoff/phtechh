import { Injectable } from '@angular/core';
import { LocalService } from './local.service/local.service';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(private storage: LocalService) {


  }

  isLogged(): boolean {
    if (this.storage.getItem('user_info')) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
