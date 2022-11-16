import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { SignInComponent } from './user-auth/sign-in/sign-in.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsdtInrPipe } from './pipes/usdt-inr.pipe';
import { RedElDirective } from './red-el.directive';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    SignInComponent,
    SignUpComponent,
    UsdtInrPipe,
    RedElDirective,
    HomeComponent,
    NoPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
