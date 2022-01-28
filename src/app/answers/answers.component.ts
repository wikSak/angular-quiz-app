import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(public translate: TranslateService, private questionService:
    QuestionService) { }
    answers:any;
    questionList:any;


  ngOnInit(): void {
    this.answers = this.questionService.getAnswers();
   this.getAllQuestions();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }


}
