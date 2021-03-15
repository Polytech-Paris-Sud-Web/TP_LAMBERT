import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticleService} from './services/article.service';
import {HttpClientModule} from '@angular/common/http';
import { ArticleCreateComponent } from './article-create/article-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleViewComponent } from './article-view/article-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreateComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleViewComponent },
  { path: '', component: ArticlesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreateComponent,
    ArticleViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
