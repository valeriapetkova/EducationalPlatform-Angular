import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { CoursesDetailsComponent } from './courses/courses-details/courses-details.component';
import { MyCoursesComponent } from './courses/my-courses/my-courses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { 
    path: 'home', 
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: ':courseId', component: CoursesDetailsComponent},
    ],
  },
  { 
    path: 'my-courses', 
    children: [
      { path: '', pathMatch: 'full', component: MyCoursesComponent },
      { path: ':courseId', component: CoursesDetailsComponent},
  ],
  },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
