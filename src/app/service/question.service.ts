import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  answers:any = [];
  addAnswers(currentQuestion:number, i:number) {
    this.answers[currentQuestion] = i;
  }
  getAnswers() {
    return this.answers;
  }
  getQuestionJson() {
    return this.http.get<any>("assets/i18n/en.json");
  }
}
