import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css'],
})
export class StudentloginComponent implements OnInit {
  alert: boolean = false;
  public studentloginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentloginForm = this.formBuilder.group({
      dob: [''],
      rollno: [''],
    });
  }
  login() {
    this.http.get<any>("http://localhost:3000/student")
    .subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.rollno === this.studentloginForm.value.rollno &&
          a.dob === this.studentloginForm.value.dob
        );
      });
      if (user) {
        this.router.navigate(["student/" + user.id]);
        this.studentloginForm.reset({});
      } else {
        this.alert = true;
        this.studentloginForm.reset();
      }
    });
    this.alert = false;
  }
}
