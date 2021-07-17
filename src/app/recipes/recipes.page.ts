import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('----- 0 ngOnInit');
    console.log(this.recipes);
  }

  ionViewWillEnter() {
    console.log('------- 1 ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('------- 2 ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('------- 3 ionViewWillLeave');
  }

  ngOnDestroy() {
    console.log('ngondestroy');
  }
}
