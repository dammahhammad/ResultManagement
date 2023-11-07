import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ManagementService } from '../management.service';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  alert: boolean = false;
  editstudent = new FormGroup({
    name: new FormControl('',[Validators.required] ),
    rollno: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    score: new FormControl('',[Validators.required]),
  });

  constructor(
    private router: ActivatedRoute,
    private manage: ManagementService
  ) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.manage
      .getCurrentStudent(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        this.editstudent = new FormGroup({
          name: new FormControl(result['name'],[Validators.required]),
          rollno: new FormControl(result['rollno'],[Validators.required]),
          dob: new FormControl(result['dob'],[Validators.required]),
          score: new FormControl(result['score'],[Validators.required]),
        });
      });
  }
  updated()
  {
    this.manage.updatedStudent(this.router.snapshot.params['id'],this.editstudent.value).
    subscribe((result)=>{
      console.warn("result",result)
    })
    this.alert=true;
    this.editstudent.reset({});
  }
  clear()
  {
    this.editstudent.reset({});
  }

  get errors(){
    return this.editstudent.get('name, rollno, dob, score')
  }

}
