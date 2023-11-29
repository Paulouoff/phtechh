import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../../shared/interfaces/news/news';
import { NewsService } from '../../shared/services/news.service/news.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  news!: News[];

  constructor(private newsService: NewsService, private router: Router) {
   
    
  }
  ngOnInit():void{
    this.GetNews();
  }
  GetNews(){
    this.newsService.GetNews().subscribe({
      next:(result) => {
        this.news = result;
        console.log(result)
      },
      error(error){
        console.log(error)
      }
    })
  }
  formatNewsDate(createdAt: Date){


  }
  goToPost(id: number){
    this.router.navigateByUrl(`newsletter/post/${id}`)
  }
}
