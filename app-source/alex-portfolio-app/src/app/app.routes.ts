import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog/:seoTitle', component: BlogComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
  ];
