import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {CurriculumComponent} from "./components/curriculum/curriculum.component";

const routes: Routes = [

  { path: 'about', component: AboutMeComponent},
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
