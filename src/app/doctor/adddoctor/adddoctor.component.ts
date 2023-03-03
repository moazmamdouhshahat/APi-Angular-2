import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { doctor } from 'src/app/Model/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent  {

  doctor : doctor = new doctor()
  constructor( public serv : DoctorService ,public route : Router) { }
post(){
  this.serv.post (this.doctor).subscribe((data:doctor)=>{
    window.location.reload();
    this.route.navigateByUrl("/doctor/list");
  })
}


}
