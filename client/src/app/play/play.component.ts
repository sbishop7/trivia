import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "./../user/user.service";
import { Question } from "./../home/new-question/question";
import { QuestionService } from "./../home/new-question/question.service";
import { ScoreService } from "./score.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  user = {username: "", user_id: ""}
  all_questions: Array<Question> = [
    {question: "What is the largest planet in the solar system?",
    answer: "Jupiter",
    fakeAnswer1: "Earth",
    fakeAnswer2: "Pluto"},
    {question: 'What did Einstein call the "most difficult thing to understand"?',
    answer: "Income Taxes",
    fakeAnswer1: "Human brain",
    fakeAnswer2: "E = mc2"},
    {question: "What is the world's biggest island?",
    answer: "Greenland",
    fakeAnswer1: "Iceland",
    fakeAnswer2: "Antartica"},
    {question: "Who was the first president of the United States of America?",
    answer: "George Washington",
    fakeAnswer1: "Ab Lincoln",
    fakeAnswer2: "Donald Trump"},
    {question: "What is Darth Sidious' public name?",
    answer: "Sheev Palpatine",
    fakeAnswer1: "Anakin Skywalker",
    fakeAnswer2: "Count Dooku"},
  ]
  trivia_questions: Array<any> =[]
  guess1 = ""
  guess2 = ""
  guess3 = ""
  score = 0
  results: any

  constructor(private _router: Router, private _userService: UserService, private _questionService: QuestionService, private _scoreService: ScoreService) { }

  ngOnInit() {
    this._userService.check_status()
      .then((data) => {
        if(data){
          this.user.username = data.username
          this.user.user_id = data.user_id
        }
      })
      .catch(() => this._router.navigate(["/login"]) )

    for(var i = 0; i < 3; i++){
      let idx = Math.floor( Math.random() * this.all_questions.length);
      let newQuestion = {question: this.all_questions[idx].question, answers: [], answer: this.all_questions[idx].answer}
      let answers = [this.all_questions[idx].answer, this.all_questions[idx].fakeAnswer1, this.all_questions[idx].fakeAnswer2]
      for (var j = 0; j<3; j++){
        let n = Math.floor( Math.random() * answers.length);
        newQuestion.answers.push(answers[n]);
        answers.splice(n, 1);
      }
      this.trivia_questions.push(newQuestion);
      this.all_questions.splice(idx, 1);
    }
  }

  cancel(){
    this._router.navigate(['/home'])
  }

  submit(){
    console.log("add submitting code")
    if(this.guess1 === this.trivia_questions[0].answer){
      this.score += 1;
    }
    if(this.guess2 === this.trivia_questions[1].answer){
      this.score += 1;
    }
    if(this.guess3 === this.trivia_questions[2].answer){
      this.score += 1;
    }
    this.results = {username: this.user.username, score: this.score, percentage: (this.score/3)*100}
    console.log(this.results)
    this._scoreService.add(this.results)
      .then(() => { this._router.navigate(["/home"]) })
      .catch(() => console.log("Couldn't save score"))
  }


}
