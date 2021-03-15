import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../models/article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.articleService.getArticleById(Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(article => {
      this.article = article;
    });
  }

  delete() {
    this.articleService.deleteArticle(this.article.id).subscribe(async () => {
      await this.router.navigateByUrl('/articles');
    });
  }
}
