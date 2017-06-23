import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './home/new-question/new-question.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/login' },
  { path: 'login', component: UserComponent },
  { path: 'home', component: HomeComponent, children:[
    { path: '', component: DashboardComponent },
    { path: 'new_question', component: NewQuestionComponent }
  ]},
  { path: 'lets_play', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
