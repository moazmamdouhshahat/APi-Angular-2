import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { LisDoctorComponent } from './doctor/lis-doctor/lis-doctor.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { ListComponent } from './student/list/list.component';


const routes: Routes = [ {
  path:"", component  : HomeComponent},
{path:"home" ,component :HomeComponent},
{path:"student/list" , component :ListComponent},
{path:"student/add" , component :AddComponent},
{path: 'student/edit/:id' , component:EditComponent},
{path :"doctor/list",component:LisDoctorComponent},
{path :"doctor/add",component:AdddoctorComponent},
{path :'doctor/edit/:id' ,component:EditDoctorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
