import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../shared/services/news.service/news.service';
import { News } from '../../../shared/interfaces/news/news';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss'
})
export class HighlightsComponent {
 highlights!: News[];

  constructor(private newsService: NewsService, private router: Router) {
   
    
  }
  ngOnInit():void{
    this.GetNews();
  }
  GetNews(){
    this.newsService.GetNews().subscribe({
      next:(result) => {
         this.highlights = result.filter(highlight => highlight.type == 'highlights');
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
