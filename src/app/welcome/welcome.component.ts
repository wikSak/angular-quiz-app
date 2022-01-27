import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
