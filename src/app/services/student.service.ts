import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../Model/student';
import { SharedServicesService } from './shared-services.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends SharedServicesService <student>{


  constructor( public http : HttpClient) {  
    super(http ,"http://localhost:3000/student")
  }

}
