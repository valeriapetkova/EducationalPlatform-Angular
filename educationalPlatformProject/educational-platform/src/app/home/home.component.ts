import { Component } from "@angular/core";
// import { Course } from "../types/course";
// import { ApiService } from "../api.service";
// import { UserService } from "../user/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent {
    // lastCourses: Course[] | null = [];

    // constructor(private api: ApiService, private userService: UserService) {}

    // get isLoggedIn(): boolean {
    //     return this.userService.isLogged;
    // }

    // get userId(): string {
    //     return this.userService.user?._id || '';
    // }

    // ngOnInit(): void {
    //     this.api.getLatest().subscribe((courses) => {
    //         this.lastCourses = courses;
    //     })
    // }
}
