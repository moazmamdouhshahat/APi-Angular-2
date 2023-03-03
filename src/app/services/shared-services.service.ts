import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService<t> {


  constructor(public http : HttpClient , @Inject(String)  public  URL:string) { }
  get ():Observable<t>{
    return this.http.get<t>(this.URL);
  }

  post(body:t):Observable<t>{
    return this.http.post<t>(this.URL,body);
  }
  delete(id):Observable<t>{
    return this.http.delete<t>(this.URL + `/${id}`);
  }
  getById(id):Observable<t>{
    return this.http.get<t>(this.URL + `/${id}`)
  }
  update(id, body :t ):Observable<t>{
    return this.http.put<t>(this.URL + `/${id}`,body)
  }
}
