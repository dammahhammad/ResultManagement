import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './interface/student';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  url="http://localhost:3000/student"
  constructor(private http:HttpClient) { }
  getList()
  {
    return this.http.get(this.url)
  }
  saveStudent(data:any)
  {
    //console.warn("service",data)
    return this.http.post(this.url,data)
  }
  deleteStudent(id: number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentStudent(id: number)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updatedStudent(id:number,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

}
