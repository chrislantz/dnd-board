import { Component, OnInit } from '@angular/core';

const range = (n:number) => Array.from(Array(n).keys());

@Component({
  selector: 'dnd-board-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  xMax = 10;
  yMax = 10;
  rows: number[] = range(this.yMax);
  cols: number[] = range(this.xMax);



  constructor() { }

  ngOnInit(): void {
    
  }

}
