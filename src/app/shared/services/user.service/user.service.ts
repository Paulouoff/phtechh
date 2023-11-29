import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user/user';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: User;
  url = `${environment.apiMockUrl}/user`
  constructor(private http: HttpClient) { }

  Create(user: User) {
    return this.http.post(this.url, user)
  }

  Get() {
    return this.http.get<User[]>(this.url);
  }
  Update(id: any,user:User){
    return this.http.put(`${this.url}/${id}`,user);
  }

}
