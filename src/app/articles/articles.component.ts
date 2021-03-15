import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(() => {
      this.getArticles();
    });
  }

  getArticles() {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
}
