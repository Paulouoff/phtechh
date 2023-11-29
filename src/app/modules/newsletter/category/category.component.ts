import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../shared/services/news.service/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../../shared/interfaces/news/news';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  category!: string;
  News!: News[];
  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router,) {

  }
  ngOnInit(): void {
    this.category = this.route.snapshot.params['category'];
    this.GetByCategory(this.category);
  }
  
  GetByCategory(_category: string) {
    this.newsService.GetNews().subscribe({
      next: (success)=> {
        this.News = success.filter(news => news.type == this.category);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
    goToPost(id: number){
    this.router.navigateByUrl(`newsletter/post/${id}`)
  }
}
