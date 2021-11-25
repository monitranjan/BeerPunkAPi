import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './component/beer/beer.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  { path: '', component: BeerComponent },
  { path: 'dashboard', component: BeerComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent, pathMatch: 'full' },
  { path: '**', component: BeerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
