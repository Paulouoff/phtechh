
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CepService {

  constructor(private http: HttpClient) { 

  }

  searchCep(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      const cepValid = /^[0-9]{8}$/;

      if (cepValid.test(cep)) {

        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
      }
    }
    return of({});
  }
}
