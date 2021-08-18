import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBodyComponent } from './appBody/app-Body.component';
import { BodyLeftComponent } from './bodyLeft/body-Left.component';
import { SearchBarComponent } from './searchBar/search-Bar.component';



@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    BodyLeftComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
