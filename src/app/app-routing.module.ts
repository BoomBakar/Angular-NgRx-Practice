import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesiComponent } from './components/desi/desi.component';
import { ContinentalComponent } from './components/continental/continental.component';

const routes: Routes = [
  { path: 'desi', component: DesiComponent },
  { path: 'continental', component: ContinentalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
