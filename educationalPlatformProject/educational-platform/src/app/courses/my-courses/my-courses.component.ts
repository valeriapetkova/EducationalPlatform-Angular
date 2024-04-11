import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Course } from "src/app/types/course";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-my-courses',
    templateUrl: './my-courses.component.html',
    styleUrls: ['./my-courses.component.css'],
})

export class MyCoursesComponent implements OnInit {

    courses: Course[] | null = [];

    constructor(private api: ApiService, private userService: UserService) {}
    
    ngOnInit(): void {
        const userId = this.userService.user?._id || '';
        this.api.getMyCourses(userId).subscribe((courses) => {
            this.courses = courses;
        })
    }
}