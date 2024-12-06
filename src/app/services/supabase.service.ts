import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  async getAllCategories() {
    const { data, error } = await this.supabase
      .from('categories')
      .select()

    return data;
  }

  async getAllFoods() {
    const { data, error } = await this.supabase
      .from('food')
      .select()

    return data;
  }

}
