import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../shared/services/news.service/news.service';
import { News } from '../../../shared/interfaces/news/news';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Paragraph } from '../../../shared/interfaces/news/paragraph';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-post',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  id!: number;
  News!: News;
  paragraphs!: Paragraph[];
  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router,) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.GetById(this.id);
  }
  
  GetById(id: number) {
    this.newsService.GetById(id).subscribe({
      next: (success)=> {
        this.News = success;
       this.paragraphs = success.paragraph;
       console.log(this.paragraphs)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
