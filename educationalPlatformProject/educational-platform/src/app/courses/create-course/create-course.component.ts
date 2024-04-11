import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";

@Component({
    selector: 'app-create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.css'],
})

export class CreateCourseComponent {
    constructor(private apiService: ApiService, private router: Router) {}

    addCourse(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { title, startDate, endDate, category, description } = form.value;
        this.apiService.createCourse(title, startDate, endDate, category, description).subscribe(() => {
            this.router.navigate(['/courses']);
        });
    }
}