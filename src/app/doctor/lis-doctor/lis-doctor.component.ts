import { Component, OnInit } from '@angular/core';
import { doctor } from 'src/app/Model/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-lis-doctor',
  templateUrl: './lis-doctor.component.html',
  styleUrls: ['./lis-doctor.component.css']
})
export class LisDoctorComponent {

  doctor : doctor=new doctor()
  constructor( public serv : DoctorService ) {

    this.serv.get().subscribe((data:doctor)=>{
this.doctor=data;

    })
   }

   Delete(id){
    this.serv.delete(id).subscribe((data:doctor)=>{
      window.location.reload();
    })
   }

}
