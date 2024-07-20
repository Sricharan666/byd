import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [{path : 'signup' , component  : SignupComponent},{path : 'login' , component : LoginComponent},
{path : 'home',component : HomeComponent},{path : 'courses', component : AllcoursesComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},{path : 'machinelearning', component : MachineLearningComponent},
{path : 'dscience', component : DataScienceComponent},{path :'java' , component : JavafullstackComponent},
{path : 'cc', component : CloudcomputingComponent},{path : 'iot', component : IotComponent},{path : 'python', component : PythonComponent},
{path : 'mdevelop', component : MDevelopmentComponent},{path : 'digitalm', component : DigitalmarketingComponent},
{path : 'cyber' , component : CyberSecurityComponent},{path : 'aboutus' , component : AboutUsComponent},
{path : 'programs' , component : ProgramsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
