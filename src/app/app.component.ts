import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dragAndDrop';
  numbers: number[] = []
  orherNumbers:number[]=[];


  constructor() {
    for (let i = 0; i < 10; i++) {
      this.numbers.push(i)
    }
  }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<number[]>) {

    if (event.previousContainer !== event.container){
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
    }else {
     moveItemInArray(this.numbers,event.previousIndex,event.currentIndex)
    }
     console.log('event yazdır => ', event )
  }
}
