import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { AlertHomeNameComponent } from './components/home/alert-home-name/alert-home-name.component';
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutMeComponent,
    HomeComponent,
    AlertHomeNameComponent,
    CurriculumComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
    ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
