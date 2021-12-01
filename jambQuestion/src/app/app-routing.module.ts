import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorecontentComponent } from './explorecontent/explorecontent.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SupplyPlayCodeComponent } from './supply-play-code/supply-play-code.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'signup',component:SignUpPageComponent},
  {path:'playit',component:SupplyPlayCodeComponent},
  {path:'explore',component:ExplorecontentComponent}
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
