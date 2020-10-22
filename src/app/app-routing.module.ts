import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { TwoPartComponent } from './two-part/two-part.component';

const routes: Routes = [
  {path: 'single', component: SingleComponent},
  {path: 'TwoPart', component: TwoPartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
