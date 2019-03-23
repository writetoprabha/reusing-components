import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesContainerComponent } from './names-container/names-container.component';
import { WelcomeNameComponent } from './welcome-name/welcome-name.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesContainerComponent,
    WelcomeNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
