import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course, CourseChanges } from "./types/course";


@Injectable({
    providedIn: 'root',
})

export class ApiService {

    constructor(private http: HttpClient) {}

    getCourses() {
        return this.http.get<Course[]>(`/api/data/courses`)
    }

    getCourse(id: string) {
        return this.http.get<Course>(`/api/data/courses/${id}`)
    }

    createCourse(title: string, startDate: string, endDate: string, category: string, description: string) {
        return this.http.post<Course>(`/api/data/courses`, { title, startDate, endDate, category, description })
    }

    updateCourse(courseId: string, title: string, startDate: string, endDate: string, category: string, description: string) {
        return this.http.put<CourseChanges>(`/api/data/courses/${courseId}`, { title, startDate, endDate, category, description })
    }

    deleteCourse(courseId: string) {
        return this.http.delete<Course>(`/api/data/courses/${courseId}`)
    }

    getLatest() {
        return this.http.get<Course[]>(`/api/data/courses?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
    }

    getMyCourses(userId: string) {
        const query = `where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
        return this.http.get<Course[]>(`/api/data/courses?${query}`);
    }

}