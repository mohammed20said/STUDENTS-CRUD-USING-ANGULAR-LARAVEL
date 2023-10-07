import { Component } from '@angular/core';
import { StudentService,StudentResponse } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  constructor(private studentService:StudentService){}
  students!:StudentResponse[];
  isLoading : boolean = false ;

  ngOnInit():void {
    this.getStudentsListes();
  }

  getStudentsListes(){
      this.isLoading=true;
      this.studentService.getStudents().subscribe((data:any) =>{
        this.students=data.students;
        this.isLoading=false;
      })

      

  }

  deleteStudent(event:any,studentId:number){
    if(confirm('Are you sure you want to delete this student ?')){
      event.target.innerText='deleting ...';

      this.studentService.destroyStudent(studentId).subscribe((data:any)=>{
        this.getStudentsListes();
        alert(data.message);
      })
    }
  }

}
