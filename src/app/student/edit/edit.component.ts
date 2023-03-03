import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { student } from 'src/app/Model/student';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 id;
 student : student = new student();
  constructor( public serv :StudentService,public Active :ActivatedRoute  , public route : Router) {
    this.id= this.Active.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.serv.getById(this.id).subscribe( (data : student)=>{
      this.student= data;
     
    })
    
   }
   update(id){
     this.serv.update(id, this.student).subscribe((data:student)=>{
      this.route.navigateByUrl("/student/list")
    
    })
   }

  ngOnInit(): void {
  }

}
