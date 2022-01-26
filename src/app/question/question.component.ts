import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../service/question.service';

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
  progress:string="0";
  flag:boolean = false;
  isQuizFinished : boolean = false;
  @ViewChild('selected') choosen:any;
  constructor(private questionService:
  QuestionService) {}

  ngOnInit(): void {
    this.getAllQuestions();
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
      this.correctAnswer = (Math.round((this.correctAnswer/this.questionList.length)*1000))/10;
      this.incorrectAnswer = (Math.round((this.incorrectAnswer/this.questionList.length)*1000))/10;
      this.isQuizFinished = true;
    }
    this.flag = false;
    this.getProgress();
    this.choosen.nativeElement.classList.remove('click-disabled');
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
  // resetQuiz() {
  //   this.getAllQuestions();


  // }
}
