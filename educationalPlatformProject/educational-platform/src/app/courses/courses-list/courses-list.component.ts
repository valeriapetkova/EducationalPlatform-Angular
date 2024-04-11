import { Component, OnInit } from "@angular/core";
import { Course } from "../../types/course";
import { ApiService } from "../../api.service";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css'],
})

export class CoursesListComponent implements OnInit {
    courses: Course[] | null = [];

    constructor(private api: ApiService, private userService: UserService) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    get userId(): string {
        return this.userService.user?._id || '';
    }

    ngOnInit(): void {
        this.api.getCourses().subscribe((courses) => {
            this.courses = courses;
        })
    }
}