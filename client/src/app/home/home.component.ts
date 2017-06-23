import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { UserService } from "./../user/user.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user_id: string
  username: string
  user = {username: "", user_id: ""}

  constructor( private _userService: UserService, private _router: Router ) { }

  ngOnInit() {
    this._userService.check_status()
      .then((data) => {
        if(data){
          this.user.username = data.username
          this.user.user_id = data.user_id
        }
      })
      .catch(() => this._router.navigate(["/login"]) )
  }

  logout(){
    this._userService.logout()
                    .then(() => {
                      this._router.navigate(['/'])
                    })
                    .catch((err) => {
                      console.log(err)
                      this._router.navigate(['/'])
                    })
  }
}
