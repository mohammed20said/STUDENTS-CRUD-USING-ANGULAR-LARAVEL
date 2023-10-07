import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  name!:string;
  course!:string;
  email!:string;
  phone!:string;
  errors : any = [];
  isLoading : boolean = false;
  loadingTitle : string = 'Loading';

  constructor(private studentService : StudentService){

  }



  saveStudent(){
    this.isLoading=true;
    this.loadingTitle='Saving'; 
    var inputData = {
      name : this.name,
      course :this.course,
      email:this.email,
      phone :this.phone

    }

    this.studentService.saveStudent(inputData).subscribe({
      next:(res : any)=>{
        alert(res.message);
        this.name='';
        this.email='';
        this.course='';
        this.phone='';
        this.errors=[];
        this.isLoading=false;

      },
      error: (err:any)=>{
        this.errors=err.error.message;
        this.isLoading=false;
      }
    })
  }

}
