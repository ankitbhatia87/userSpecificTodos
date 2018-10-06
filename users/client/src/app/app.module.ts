import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';

import {AppRoutingModule, AppRoutingComponents} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TodosComponent,
    AppRoutingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
