import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  deletedArticle = new EventEmitter<Article>();

  constructor() {
  }

  ngOnInit() {

  }

  async delete() {
    this.deletedArticle.emit(this.article);
  }
}
