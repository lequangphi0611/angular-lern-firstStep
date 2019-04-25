import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { SubjectService } from './subject.service';

import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SubjectContentComponent } from './subject-content/subject-content.component';
import { QuizContentComponent } from './quiz-content/quiz-content.component';

const routes: Routes = [
  { 
    path: 'subjects', 
    component: SubjectContentComponent 
  },
  {
    path: '',
    redirectTo:"/subjects",
    pathMatch : 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SubjectContentComponent,
    QuizContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    HttpClientModule
  ],
  providers: [
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
