import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion = new Question();

  constructor( private _router: Router, private _questionService: QuestionService ) { }

  ngOnInit() {
  }

  cancel(){
    this._router.navigate(['/home'])
  }

  submitQuestion(){
    console.log("add submitting code")
  }
}
