import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1><u> Recipes</u></h1>
    <h3 (click)="doStuff(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
      new Task("Rice and Chicken Recipe.", 0),
      new Task("Rice and Beef Recipe.", 1),
      new Task("Pasta Recipe.", 2),
    ];
  doStuff(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("Ingredients and Instructions:");
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}

/*{{ }}:moustache tags: they cause any expression/variables inside of the double curly brackets to be evaluatedso that their value is displayed
 task 1: boolean value named done and its default is false
 task 2: description
 TASK 3: an Id to assign each task a unique number
 use an output bunding when you want to trigger an event from a DOM element*/
