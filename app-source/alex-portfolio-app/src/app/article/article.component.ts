import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../models/article';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent {
  @Input() item: Article | undefined;
  @Input() compact: boolean = false;

  constructor(){
    this.item = {
      title: 'New',
      content: 'test',
      tags: ['test', '1'],
      published: new Date(),
      seoTitle: 'open-bank-1',
      shortContent: '',
      imageName: ''
    }
  }
}
