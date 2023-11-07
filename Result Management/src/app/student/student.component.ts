import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  collection: any;
  constructor(private router: ActivatedRoute,private manage: ManagementService) { }

  ngOnInit(): void {
    this.manage.getCurrentStudent(this.router.snapshot.params['id']).
    subscribe((result :any)=>{
      //console.warn("result",result),
      this.collection=result;
 });
  }
}
