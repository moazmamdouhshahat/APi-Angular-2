import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctor } from '../Model/doctor';
import { SharedServicesService } from './shared-services.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends SharedServicesService <doctor> {

  constructor(public http :HttpClient) {
    super(http , "http://localhost:3000/doctor");
   }
}
