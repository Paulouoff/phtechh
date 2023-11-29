import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterUserComponent,EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe,
    RouterModule

  ],
  providers:[  provideEnvironmentNgxMask(),]
})
export class UserModule { }
