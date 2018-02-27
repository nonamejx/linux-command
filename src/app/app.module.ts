import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { CommandSearchComponent } from './command-search/command-search.component';
import { CommandService } from './command.service';


@NgModule({
  declarations: [
    AppComponent,
    CommandSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ CommandService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
