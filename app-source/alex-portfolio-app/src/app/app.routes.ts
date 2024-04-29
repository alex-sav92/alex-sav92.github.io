import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'blog/:seoTitle', component: BlogComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
  ];
