import { RouterModule, Routes } from "@angular/router";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CoursesDetailsComponent } from "./courses-details/courses-details.component";
import { NgModule } from "@angular/core";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { AuthActivate } from "../guards/auth.activate";

const routes: Routes = [
    { path: 'courses', component: CoursesListComponent },
    { path: 'courses/:courseId', component: CoursesDetailsComponent},
    { path: 'courses/:courseId/joined', component: CoursesDetailsComponent},
    { path: 'courses/:courseId/comments', component: CoursesDetailsComponent},
    {
        path: 'create',
        component: CreateCourseComponent,
        canActivate: [AuthActivate],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CoursesRoutingModule {}