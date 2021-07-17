import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;

  constructor(
    // ruta activa
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('----- 0 ngOnInit');
    // observable to obtain data
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      //if there´s no id
      if (!paramMap.has('recipeId')) {
        // redirect user
        return;
      }
      // gets the id from param
      const recipeId = paramMap.get('recipeId');
      // gets the recipe by id through service
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  ionViewWillEnter() {
    console.log('------- 1 ionViewWillEnter');
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

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
