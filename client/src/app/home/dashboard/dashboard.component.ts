import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ScoreService } from './../../play/score.service';
import { Score } from './../../play/score';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scores;
  message;

  constructor(private _router: Router, private _scoreService: ScoreService ) { }
  
  ngOnInit() {
    this.get_all_scores();
    console.log(this.scores)
  }

  lets_play(){
    this._router.navigate(['/lets_play'])
  }

  get_all_scores(){
    console.log("retrieving Scores")
    this._scoreService.all_scores()
        .then( data => { 
          console.log(data),
          this.scores = data })
        .catch( err => { console.log("Error retrieving all scores... ", err);})
    console.log(this.scores)
  }
}
