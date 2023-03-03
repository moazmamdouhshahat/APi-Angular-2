import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/Model/student';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  student : student = new student();

  constructor(public serv :StudentService) { }

  post(){

    this.serv.post(this.student).subscribe((data:student)=>{
      window.location.reload();
    })
    
  }
  ngOnInit(): void {
  }

}
