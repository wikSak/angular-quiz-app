import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../service/question.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public questionList: any = [];
  public currentQuestion: number = 0;
  correctAnswer:number = 0;
  incorrectAnswer:number = 0;
  resultText:string = "";
  progress:string="0";
  flag:boolean = false;
  isQuizFinished : boolean = false;
  @ViewChild('selected') choosen:any;
  @ViewChild('selectedOption') choosenOption:any;

  constructor(private questionService:
  QuestionService, public translate: TranslateService) {}

  ngOnInit(): void {
    this.getAllQuestions();
      var lastMove = Date.now();

      document.onmousemove = function() {
        lastMove = Date.now();
      }

      setInterval(function() {
        var diff = Date.now() - lastMove;
        if (diff >= 300000 && window.location.href !="/welcome") {
          window.location.href = "/welcome";
        }
      }, 1000);
  }
  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }
  nextQuestion() {
    if(this.currentQuestion < (this.questionList.length - 1) ){
      this.currentQuestion++;
    } else if(this.currentQuestion === (this.questionList.length - 1)) {
      this.isQuizFinished = true;
      this.result()
    }
    this.flag = false;
    this.getProgress();
    this.choosen.nativeElement.classList.remove('click-disabled');

  }
result() {
    let correctPercent = Math.round((this.correctAnswer/this.questionList.length)*100);
  if(correctPercent <= 50) {
    this.resultText = "result.bad";
  } else if (correctPercent > 50 && correctPercent <= 80){
    this.resultText = "result.medium";
  } else if (correctPercent > 80) {
    this.resultText = "result.good";
  }
}
  chooseAnswer(option:any) {
    if(option.correct) {
      this.correctAnswer++;
    } else {
      this.incorrectAnswer++;
    }
    this.flag = true;
   this.choosen.nativeElement.classList.add('click-disabled');
  }
  getProgress() {
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
  answer(correct:boolean,e:any){
    e = e.target;
    if(correct){
      e.classList.add('correct');
    } else {
      e.classList.add('incorrect');
    }

  }

}
