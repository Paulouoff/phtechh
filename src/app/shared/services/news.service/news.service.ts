import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { News } from '../../interfaces/news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = `${environment.apiMockUrl}/news`; 
  constructor(private http: HttpClient) { }

  GetNews(){
    return this.http.get<News[]>(this.url);
  }
  GetById(id : any){
    return this.http.get<News>(`${this.url}/${id}`)
  }
}
