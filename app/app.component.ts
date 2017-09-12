import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3 (click)="doStuff(currentRecipe)">{{ type }}</h3>
    <div class="well" *ngFor="let currentRecipe of recipes">
      <h4>{{currentRecipe.title}}</h4>
      <h5>{{currentRecipe.ingredients}}</h5>
      <p>{{currentRecipe.directions}}</p>
    </div>
  </div>
  `
})

export class AppComponent {
  type: string = '';
  recipes: Recipe[] = [
    new Recipe('Chicken', 'Chicken thighs,cilantro sauce and vegetable oil', 'Mix all the ingrdients and Roast the chicken for 25 minutes, 180 degrees '),
    new Recipe('Beef', 'Meat, Onions, vegetable oil', 'Add zucchini, tomatoes, onions and capsicum. After a few minutes add beef and cook for 30 minutes'),
    new Recipe('Pasta', 'Water and Pasta', 'Bring a large pot of water to a boil. Add pasta and cook according to package direction')
  ];
/*  doStuff(clickTask: Recipe) {
    alert
  }*/
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
}


/*{{ }}:moustache tags: they cause any expression/variables inside of the double curly brackets to be evaluatedso that their value is displayed
 task 1: boolean value named done and its default is false
 task 2: description
 TASK 3: an Id to assign each task a unique number
 use an output bunding when you want to trigger an event from a DOM element*/
