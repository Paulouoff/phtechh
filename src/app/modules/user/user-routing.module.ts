import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'edit', component: EditUserComponent, canActivate: [authGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
