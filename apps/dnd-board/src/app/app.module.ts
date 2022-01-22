import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RedisService } from '@dnd-board/api-services';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    RedisService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
