import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowseComponent } from './browse/browse.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserComponent, children: []},
  {path: 'browse', pathMatch: 'full', component: BrowseComponent, children: []},
  {path: 'bicycle/add-new', pathMatch: 'full', component: AddBikeComponent },
  {path: 'bicycle/show/:id', component: EditBikeComponent, children: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
