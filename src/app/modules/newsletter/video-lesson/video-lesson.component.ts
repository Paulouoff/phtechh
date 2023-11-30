import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoLessons, returnValues } from '../../../shared/interfaces/video-lessons/videolessons';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-video-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-lesson.component.html',
  styleUrl: './video-lesson.component.scss'
})
export class VideoLessonComponent {
  id!: number;
  videoLesson!: VideoLessons;
  videoLessonsCard!: VideoLessons[];
  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.GetById(this.id);
     this.GetAllCards();
  }

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) {


  }
  GetById(id: number) {
    var videoLessons = returnValues();
    this.videoLesson = videoLessons.filter(video => video.id == id)[0];

    this.videoLesson.urlSafePrincipal = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLesson.videoPrincipal)
    this.videoLesson.urlSafeSecondary = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLesson.videoSecondary)
  }
  GetAllCards(){
    var videoLessons = returnValues();
    this.videoLessonsCard = videoLessons.filter(video => video.id != this.id);
  }
  goToVideoLesson(id: number){
    console.log(id)
    this.router.navigate(['newsletter/video-lesson',id]).then(() => {
        window.location.reload();
      });
  }
}
