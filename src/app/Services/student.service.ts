import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse{
  
    id: number
    name:string
    course: string
    email: string
    phone: string
    created_at: string
    updated_at: string
}

export interface StudentResponseType{
  status : number;
  students : StudentResponse[];
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { 


  }

  getStudents(){
    return this.httpClient.get<StudentResponseType>('http://localhost:8000/api/students');

  }

  getStudent(studentId:number){
    const url = `http://localhost:8000/api/students/${studentId}/edit`;
    return this.httpClient.get(url);
  }

  updateStudent(inputDate : object,studentId:number){
    const url = `http://localhost:8000/api/students/${studentId}/edit`;
    return this.httpClient.put(url,inputDate);
  }

  destroyStudent(studentId:number){
    const url = `http://localhost:8000/api/students/${studentId}/delete`;
    return this.httpClient.delete(url);

  }

  saveStudent(inputData:object){
    return this.httpClient.post('http://localhost:8000/api/students',inputData);
  }
}
