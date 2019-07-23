import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeplistComponent } from './deplist/deplist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepDetailsComponent } from './dep-details/dep-details.component';

const routes: Routes = [
  {path:"", redirectTo: "/departments", pathMatch:"full"},
  {path:"employees", component: EmplistComponent},
  {path:"departments", component: DeplistComponent},
  {path:"departments/:id", component: DepDetailsComponent},
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeplistComponent,EmplistComponent,PageNotFoundComponent]
