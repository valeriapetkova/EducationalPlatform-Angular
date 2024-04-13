import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "../types/comment";


@Injectable({
    providedIn: 'root',
})

export class CommentsService {

    constructor(private http: HttpClient) {}

    getComments(courseId: string) {
        const query = new URLSearchParams({
            where: `courseId="${courseId}"`,
            load: `owner=_ownerId:users`,
        });

        return this.http.get<Comment[]>(`/api/data/comments?${query}`)
    }

    createComment(courseId: string, comment: string, email: string) {
        return this.http.post<Comment>(`/api/data/comments`, { courseId, comment, email })
    }

    removeComment(commentId: string) {
        return this.http.delete<Comment>(`/api/data/comments/${commentId}`)
    }
}