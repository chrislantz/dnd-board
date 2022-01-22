import { Component, OnInit } from '@angular/core';
import { RedisService } from '@dnd-board/api-services';

@Component({
  selector: 'dnd-board-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public password = '';
  public username = '';

  constructor(private readonly redisService: RedisService) { }

  

  login() {
    console.log(`logging in with: ${this.username}/${this.password}`);

    this.redisService.connect(this.username, this.password);
  }
}
