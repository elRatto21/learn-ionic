import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { SupabaseService } from '../services/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page implements OnInit {

  categories: any = []
  foods: any = []

  constructor(private supabaseService: SupabaseService) { }
  
  async reload() {
    this.categories = await this.supabaseService.getAllCategories();
    this.foods = await this.supabaseService.getAllFoods();
    console.log("categories", this.categories)
    console.log("food", this.foods)
  }

  getFoodsByCategorie(category: any) {
    return this.foods.filter((food: any) => food.category === category)
  }

  ngOnInit() {
    this.reload()
  }
}
