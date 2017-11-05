import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from "./api.service";
import { UserComponent } from './user/user.component';
import { BrowseComponent } from './browse/browse.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BrowseComponent,
    AddBikeComponent,
    EditBikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
