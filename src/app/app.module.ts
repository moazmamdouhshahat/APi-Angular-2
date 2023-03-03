import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NavberComponent } from './shared/navber/navber.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { LisDoctorComponent } from './doctor/lis-doctor/lis-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DoctorComponent,
    AdddoctorComponent,
    LisDoctorComponent,
    EditDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
