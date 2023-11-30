import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../shared/services/news.service/news.service';
import { News } from '../../../shared/interfaces/news/news';
import { VideoLessons, returnValues } from '../../../shared/interfaces/video-lessons/videolessons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-lessons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-lessons.component.html',
  styleUrl: './video-lessons.component.scss'
})
export class VideoLessonsComponent {
  videoLessons!: VideoLessons[];
  ngOnInit(): void {
    this.GetAll();
  }
  constructor(private router: Router) {


  }
  goToVideoLesson(id: number) {
    this.router.navigateByUrl(`newsletter/video-lesson/${id}`)
  }
  GetAll() {
    this.videoLessons = returnValues();
  }
}
