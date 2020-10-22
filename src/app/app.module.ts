import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { TwoPartComponent } from './two-part/two-part.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    TwoPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
