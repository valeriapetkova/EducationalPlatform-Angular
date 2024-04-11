import { RouterModule, Routes } from "@angular/router";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CoursesDetailsComponent } from "./courses-details/courses-details.component";
import { NgModule } from "@angular/core";
import { CreateCourseComponent } from "./create-course/create-course.component";

const routes: Routes = [
    { path: 'courses', component: CoursesListComponent },
    { path: 'courses/:courseId', component: CoursesDetailsComponent},
    {
        path: 'create',
        component: CreateCourseComponent
        //canActivate
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CoursesRoutingModule {}