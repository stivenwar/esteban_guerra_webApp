import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { AlertHomeNameComponent } from './components/home/alert-home-name/alert-home-name.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {LayoutModule} from '@angular/cdk/layout';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ProyectsComponent } from './components/proyects/proyects.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { ContactComponent } from './components/contact/contact.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSliderModule} from "@angular/material/slider";
import {IonicAppComponent} from "./components/proyects/ionic-app/ionic-app.component";
import {IonicModule} from "@ionic/angular";
import { AngularAppUsersComponent } from './components/proyects/angular-app-users/angular-app-users.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    AlertHomeNameComponent,
    CurriculumComponent,
    FooterComponent,
    ProyectsComponent,
    ContactComponent,
    IonicAppComponent,
    AngularAppUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    LayoutModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSliderModule,
    IonicModule.forRoot(),
    HttpClientModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/esteban_guerra_webApp/' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
