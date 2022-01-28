import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [
  {path:"", redirectTo: 'welcome', pathMatch:"full"},
  {path:"welcome", component: WelcomeComponent},
  {path:'question', component: QuestionComponent},
  {path:'answers', component: AnswersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
