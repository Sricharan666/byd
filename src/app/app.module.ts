import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { JavafullstackComponent } from './javafullstack/javafullstack.component';
import { CloudcomputingComponent } from './cloudcomputing/cloudcomputing.component';
import { IotComponent } from './iot/iot.component';
import { PythonComponent } from './python/python.component';
import { MDevelopmentComponent } from './m-development/m-development.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramsComponent } from './programs/programs.component';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AllcoursesComponent,
    MachineLearningComponent,
    DataScienceComponent,
    JavafullstackComponent,
    CloudcomputingComponent,
    IotComponent,
    PythonComponent,
    MDevelopmentComponent,
    CyberSecurityComponent,
    DigitalmarketingComponent,
    AboutUsComponent,
    RegistrationComponent,
    ContactComponent,
    ProgramsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
