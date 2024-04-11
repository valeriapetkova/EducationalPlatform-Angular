import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CoursesDetailsComponent } from "./courses-details/courses-details.component";
import { CoursesRoutingModule } from "./courses-routing.module";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseEditComponent } from "./course-edit/course-edit.component";
import { MyCoursesComponent } from "./my-courses/my-courses.component";

@NgModule({
    declarations: [
        CoursesListComponent, 
        CoursesDetailsComponent,
        CreateCourseComponent,
        CourseEditComponent,
        MyCoursesComponent,
    ],
    imports: [CommonModule, CoursesRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})

export class CoursesModule {}