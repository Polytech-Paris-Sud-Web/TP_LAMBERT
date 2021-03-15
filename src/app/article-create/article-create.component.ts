import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  articleForm: FormGroup;

  @Output()
  refresh = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  createArticle() {
    this.articleService.postArticle(this.articleForm.value).subscribe(async () => {
      console.log('Article created');
      await this.router.navigateByUrl('/articles');
      this.refresh.emit();
    });
  }
}
