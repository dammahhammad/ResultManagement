import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ManagementService } from '../management.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  alert: boolean=false;
  addstudent = new FormGroup({
    name: new FormControl('',[Validators.required]),
    rollno: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    score: new FormControl('',[Validators.required]),
  })
  constructor(private stud:ManagementService) { }

  ngOnInit(): void {
  }
  collectStudent(){
    //console.warn(this.addstudent.value)
    this.stud.saveStudent(this.addstudent.value).subscribe((result)=>{
      console.warn('Result is here',result)
    })
    this.alert=true;
    this.addstudent.reset({})
  }
  clear()
  {
    this.addstudent.reset({});
  }

  get errors(){
    return this.addstudent.get('name, rollno, dob, score')
  }
}
