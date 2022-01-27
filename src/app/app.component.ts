import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-quiz-app';

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['en', 'pl']);
    // Set default language
    translate.setDefaultLang('en');
  }
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
