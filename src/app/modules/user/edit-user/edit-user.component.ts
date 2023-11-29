import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../shared/services/user.service/user.service';
import { CepService } from '../../../shared/services/cep.service/cep.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordMatchValidator } from '../../../shared/validators/custom.validators.validator';
import { Router } from '@angular/router';
import { LocalService } from '../../../shared/services/local.service/local.service';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  submitted = false;
  userForm!: FormGroup;
  isValid!: boolean;
  userId!: any;
  user_cache = JSON.parse(this.localService.getItem('user_info')!)
  showPassword = false;
  typeInputPassword = 'text'
  showConfirmPassword = false;
  typeInputConfirmPassword = 'text'


  private cepService: CepService;
  private userService: UserService;
  constructor(private router: Router, _cepService: CepService, private fb: FormBuilder, _userService: UserService, private localService: LocalService) {
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
  ngOnInit(): void {
    this.userService.Get().subscribe({
      next: (data) => {

        var user = data.filter(user => user.email === this.user_cache['email'] && user.password === this.user_cache['password'])
        this.userId = user[0].id;
        this.userForm.patchValue(user[0]);
      }
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return
    this.userForm.get('passwordConfirm')?.disable();
    var result = this.userForm.value
    this.userService.Update(this.userId, result).subscribe({
      next: (success) => {
        this.router.navigateByUrl('/newsletter')
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

  goToBack() {
    this.router.navigateByUrl('/newsletter')
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
