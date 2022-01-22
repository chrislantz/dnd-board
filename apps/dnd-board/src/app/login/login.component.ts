import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dnd-board-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public password: string;
  public username: string;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(`logging in with: ${this.username}/${this.password}`);
  }
}
