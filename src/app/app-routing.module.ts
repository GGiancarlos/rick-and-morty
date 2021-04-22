import { FilterComponent } from './components/filter/filter.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'filter', component: FilterComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '**', redirectTo: 'characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
