import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { UserAuthComponent } from './register/user-auth/user-auth.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    AdminAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
