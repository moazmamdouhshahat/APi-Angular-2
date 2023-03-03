import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/Model/student';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  student : student;

  constructor(public serv : StudentService) { 
   this.serv.get().subscribe((data:student)=>{
    this.student = data;
    // console.log(this.student);
    
   })
  }
  delete(id){
    this.serv.delete(id).subscribe((data:student)=>{
      window.location.reload;
    })
  }

  ngOnInit(): void {
  }

}
