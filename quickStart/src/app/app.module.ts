import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app.component';
import { AuthService } from './core/auth.service';
import { routing } from './router/app.router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    { provide: 'auth', useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
