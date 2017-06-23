import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './home/new-question/new-question.component';
import { QuestionService } from './home/new-question/question.service';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PlayComponent } from './play/play.component';
import { ScoreService } from './play/score.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NewQuestionComponent,
    DashboardComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, QuestionService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
