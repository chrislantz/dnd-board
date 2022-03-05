import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,
    TileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
