import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LocalService } from '../../shared/services/local.service/local.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user_Info: any; private router: Router;
  defaultImg = "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
  localService: LocalService;
  ngOnInit(): void {
   
    var userJson = this.localService.getItem('user_info')
    this.user_Info = JSON.parse(userJson!);
  }
  constructor(_router: Router, private _localService: LocalService) {
    this.router = _router;
    this.localService = _localService;
  }
  checkIfUserIsLogged(): boolean {
    return this.localService.getItem('user_info') !== null;
  }
  onLogout() {
    localStorage.removeItem('user_Info')
    this.router.navigateByUrl('/')
  }
}
