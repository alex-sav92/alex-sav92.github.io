import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Article } from '../models/article';
import { ArticleComponent } from "../article/article.component";
import { ArticleServiceService } from '../article-service.service';

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    imports: [RouterModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ArticleComponent]
})
export class BlogComponent {
  public articles: Article[] = [];
  public currentArticle: Article | undefined = {
    title: '',
    content: '',
    tags: [],
    published: new Date(),
    seoTitle: '',
    shortContent: '',
    imageName: ''
  };

  showOneArticle: boolean = false;
  constructor(private route: ActivatedRoute, private articlesService: ArticleServiceService) {
    let currentTitle = this.route.snapshot.paramMap.get('seoTitle');

    if (this.articles.length == 0) {
      this.articles = articlesService.getAll();
    };
    
    if (currentTitle != null && currentTitle != ''){
      this.showOneArticle = true;
      this.currentArticle = articlesService.getBySeoTitle(currentTitle);
    }
  }
  ngOnInit(_currentSeoTitle: string){

  }
}
