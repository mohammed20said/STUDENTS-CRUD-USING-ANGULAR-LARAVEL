import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  studentId! : any;
  student!:any;
  errors : any = [];
  isLoading : boolean = false;
  loadingTitle : string = '';

  constructor(private route:ActivatedRoute,private studentService:StudentService){
  }


  ngOnInit(){
    this.studentId=this.route.snapshot.paramMap.get('id');
    this.isLoading=true;
    this.studentService.getStudent(this.studentId).subscribe((data:any)=>{
      this.student=data.student;
      this.isLoading=false;

    }) 

  }

  updateStudent(){
    var InputDate={
      name:this.student.name,
      course:this.student.course,
      email:this.student.email,
      phone:this.student.phone,
    }

    this.isLoading=true;
    this.studentService.updateStudent(InputDate,this.studentId).subscribe({
      next:(data:any)=>{
        this.errors=[];
        alert(data.message);
        this.isLoading=false;

      },
      error: (err:any)=>{
        this.errors=err.error.message;
        this.isLoading=false;
      }
    })
  }




}
