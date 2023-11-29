import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalService } from '../../shared/services/local.service/local.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /**
   *
   */
  constructor(private localService:LocalService) {
    
  }
  checkIfUserIsLogged(): boolean {
    return this.localService.getItem('user_info') !== null;
  }
}
