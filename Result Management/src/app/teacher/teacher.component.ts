import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/student';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  collection: Student[] = [];
  constructor(private manage: ManagementService) {}
  ngOnInit(): void {
    this.manage.getList().subscribe((data: any) => {
      console.warn(data);
      this.collection = data;
    });
  }
  deleteStudent(item:number)
  {
    location.reload()
    this.manage.deleteStudent(item).subscribe((result)=>{
      console.warn("result",result)
    })
  }
}
