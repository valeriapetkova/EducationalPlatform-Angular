import { Component, OnInit } from "@angular/core";
import { Course } from "../../types/course";
import { ApiService } from "../../api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-courses-details',
    templateUrl: './courses-details.component.html',
    styleUrls: ['./courses-details.component.css'],
})

export class CoursesDetailsComponent implements OnInit {
    course = {} as Course;
    showEditMode: boolean = false;

    startDate: string = '';
    endDate: string = '';

    constructor(private api: ApiService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    get userId(): string {
        return this.userService.user?._id || '';
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            const id = data['courseId'];

            this.api.getCourse(id).subscribe((course) => {
                this.course = course;
                this.startDate = this.course.startDate.split('-').reverse().join('.');
                this.endDate = this.course.endDate.split('-').reverse().join('.');
            });
        });
    }

    onToggle(): void {
        this.showEditMode = !this.showEditMode;
    }

    isOwner(course: Course) {
        const isOwnerUser = this.course._ownerId === this.userService.user?._id;
        return isOwnerUser;
    }

    delete() {
        this.api.deleteCourse(this.course._id).subscribe({
            next: () => {
                this.router.navigate(['/courses']);
            },
            error: () => {
                this.router.navigate(['/error']);
            },
        });
    }
}