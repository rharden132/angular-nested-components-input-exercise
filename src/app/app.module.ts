import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './my-profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
