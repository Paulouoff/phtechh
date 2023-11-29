import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './newsletter.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { PostComponent } from './post/post.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', component: NewsletterComponent, canActivate: [authGuard] },
  { path: 'post/:id', component: PostComponent, canActivate: [authGuard] },
  { path: 'about-me', component: AboutMeComponent, canActivate: [authGuard] },
  { path: 'highlights', component: HighlightsComponent, canActivate: [authGuard] },
  {path: 'categories/:category',component: CategoryComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsletterRoutingModule { }
