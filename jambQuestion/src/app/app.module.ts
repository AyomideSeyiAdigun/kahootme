import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SupplyPlayCodeComponent } from './supply-play-code/supply-play-code.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HowJQWOrksComponent } from './how-jqworks/how-jqworks.component';
import { HomeUsefulnessComponent } from './home-usefulness/home-usefulness.component';
import { WorkUsefulnessComponent } from './work-usefulness/work-usefulness.component';
import { SchoolUsefulnessComponent } from './school-usefulness/school-usefulness.component';
import { ExplorecontentComponent } from './explorecontent/explorecontent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoosePersonalityComponent } from './choose-personality/choose-personality.component';
import { StudentsComponent } from './students/students.component';
import { FamilyComponent } from './family/family.component';
import { ProfessionalComponent } from './professional/professional.component';
import { TutorComponent } from './tutor/tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    NavBarComponent,
    SupplyPlayCodeComponent,
    IntroductionComponent,
    HowJQWOrksComponent,
    HomeUsefulnessComponent,
    WorkUsefulnessComponent,
    SchoolUsefulnessComponent,
    ExplorecontentComponent,
    ChoosePersonalityComponent,
    StudentsComponent,
    FamilyComponent,
    ProfessionalComponent,
    TutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
