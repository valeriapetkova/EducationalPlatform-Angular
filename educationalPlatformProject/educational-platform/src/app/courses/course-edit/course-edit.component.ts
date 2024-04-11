import { Component, Input, OnInit } from "@angular/core";
import { CourseChanges } from "../../types/course";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-course-edit',
    templateUrl: './course-edit.component.html',
    styleUrls: ['./course-edit.component.css'],
})

export class CourseEditComponent implements OnInit {
    @Input() courseInfo: CourseChanges = {
        title: '',
        startDate: '',
        endDate: '',
        category: '',
        description: '',
    };

    courseEdit: CourseChanges = {
        title: '',
        startDate: '',
        endDate: '',
        category: '',
        description: '',
    };
    
    form = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        category: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
    })
    
    constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private api: ApiService, private router: Router) {}
    
    ngOnInit(): void {
        const { title, startDate, endDate, category, description } = this.courseInfo;
        this.courseEdit = {
            title,
            startDate,
            endDate,
            category,
            description,
        };

        this.form.setValue({
            title,
            startDate,
            endDate,
            category,
            description,
        });
    }

    saveCourseChangesHandler(): void {
        if (this.form.invalid) {
            return;
        }

        this.courseEdit = this.form.value as CourseChanges;
        const { title, startDate, endDate, category, description } = this.courseEdit;

        this.activeRoute.params.subscribe((data) => {
            const courseId = data['courseId'];

            this.api.updateCourse(courseId, title, startDate, endDate, category, description).subscribe(() => {
                this.router.navigate(["/courses"]);
            });
        });

    }
}