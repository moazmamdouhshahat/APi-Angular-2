import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { doctor } from 'src/app/Model/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
id;
  doctor:doctor=new doctor();

  constructor(public serv :DoctorService , public active:ActivatedRoute,public route : Router) {
  this.id= this.active.snapshot.paramMap.get('id');
  console.log(this.id);
  

  this.serv.getById(this.id).subscribe((data:doctor)=>{

    this.doctor = data;

  })
   }
   update(){
    this.serv.update(this.id, this.doctor).subscribe((data:doctor)=>{
      window.location.reload();
      this.route.navigateByUrl("/doctor/list");
    })
   }


}
