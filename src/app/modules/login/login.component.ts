import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../shared/services/cep.service/cep.service';
import { LoginModule } from './login.module';
import Swal from 'sweetalert2';
import { UserService } from '../../shared/services/user.service/user.service';
import { LocalService } from '../../shared/services/local.service/local.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  submitted = false;
  userForm!: FormGroup;
  isValid!: boolean;
  showPassword = false;
  typeInputPassword = 'text'
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.localService.clearData();
    }

  }

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private localService: LocalService) {

    this.userForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    })
  }
  goToRegister() {
    this.router.navigateByUrl('/user/register');
  }
  onSubmit() {
    this.submitted = true;

    if (!this.userForm.valid) return;
    this.Login(this.f['email'].value, this.f['password'].value)

  }
  get f() {
    return this.userForm.controls;
  }


  Login(email: string, password: string) {
    this.userService.Get().subscribe({
      next: (success) => {
        var user = success.filter(user => user.email === email && user.password === password)
        if (user.length !== 0) {
          this.localService.setItem('user_info', JSON.stringify(user[0]))
          this.router.navigateByUrl('/newsletter');
        } else {
          Swal.fire({

            title: 'Não encontrado',
            text: 'Usuário não existe',
            icon: 'error',
            confirmButtonColor: '#5195EA',
            confirmButtonText: 'FECHAR',
            color: '#fff',
            background: '#272A37',

          })
        }
      },
      error: (err) => {
        console.log(err)
      }
    });

  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.typeInputPassword = 'password'
    }else{
      this.typeInputPassword = 'text'
    }
  }
}
