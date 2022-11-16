import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

const routes:Routes= [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'', component:HomeComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
