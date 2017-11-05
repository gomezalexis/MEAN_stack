import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent, children: []},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent, children: []},
  {path: 'list/:id', component: BucketListComponent, children: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
