import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../../shared/services/cep.service/cep.service';
import { PasswordMatchValidator } from '../../../shared/validators/custom.validators.validator';
import { UserService } from '../../../shared/services/user.service/user.service';
import { User } from '../../../shared/interfaces/user/user';

@Component({
  selector: 'app-register-user',
  standalone: false,
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  submitted = false;
  userForm!: FormGroup;
  isValid!: boolean;

  showPassword = false;
  typeInputPassword = 'text'
  showConfirmPassword = false;
  typeInputConfirmPassword = 'text'


  private cepService: CepService;
  private userService: UserService;
  constructor(private router: Router, _cepService: CepService, private fb: FormBuilder, _userService: UserService) {
    this.cepService = _cepService;
    this.userService = _userService;

    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cpf: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      sex: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      uf: ['', Validators.required],
      localidade: ['', Validators.required],
      bairro: ['', Validators.required],
    }, {
      validator: PasswordMatchValidator("password", "passwordConfirm"),
    })

  }
  goToLogin() {
    this.router.navigateByUrl('/')
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return
    this.userForm.get('passwordConfirm')?.disable();
    var result = this.userForm.value

    this.userService.Create(this.userForm.value).subscribe({
      next: (success) => {
        console.log(success);
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  searchCep() {
    const cep = this.userForm.get('cep')?.value;
    if (cep != null || cep !== '') {
      this.cepService.searchCep(cep).subscribe({
        next: (data) => {
          if (data.hasOwnProperty('erro')) {
            this.isValid = false;
            this.cleanForm();
          } else {
            this.fillForm(data);
            this.isValid = true;
          }
        },
        error: (err) => console.log(err),
      });
    }
  }

  get f() {
    return this.userForm.controls;
  }
  cleanForm() {
    this.userForm.patchValue({
      uf: null,
      bairro: null,
      logradouro: null,
      localidade: null,
      cep: null,
    });
  }
  fillForm(data: any) {
    this.userForm.patchValue({
      uf: data.uf,
      bairro: data.bairro,
      localidade: data.localidade,
      logradouro: data.logradouro,
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
   toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
    if (this.showConfirmPassword) {
      this.typeInputConfirmPassword = 'password'
    }else{
      this.typeInputConfirmPassword = 'text'
    }
  }


}
