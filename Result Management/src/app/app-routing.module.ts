import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component'
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditComponent } from './edit/edit.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

const routes: Routes = [
  {
    component:StudentloginComponent,
    path:'studentlogin'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:StudentComponent,
    path:'student/:id'
  },
  {
    component:TeacherComponent,
    path:'teacher'
  },
  {
    component:AddstudentComponent,
    path:'addstudent'
  },
  {
    component:EditComponent,
    path:'edit/:id'
  },
  {
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
