import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {CurriculumComponent} from "./components/curriculum/curriculum.component";
import {IonicAppComponent} from "./components/proyects/ionic-app/ionic-app.component";
import {AngularAppUsersComponent} from "./components/proyects/angular-app-users/angular-app-users.component";

const routes: Routes = [

  { path: 'about', component: AboutMeComponent},
  { path: 'ionicApp', component: IonicAppComponent},
  { path: 'angularAppUsers', component: AngularAppUsersComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cv', component: CurriculumComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
