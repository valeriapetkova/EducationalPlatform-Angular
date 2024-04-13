import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";
import { Comment } from "src/app/types/comment";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentsService } from "../comments.service";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css'],
})

export class CommentsListComponent implements OnInit {
    comments: Comment[] | null = [];
    courseId: string = '';
    
    constructor(private commentsService: CommentsService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}
    
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.courseId = data['courseId'];

            this.commentsService.getComments(this.courseId).subscribe((comments) => {
                this.comments = comments;
            });
        });

    }

    addComment(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { comment } = form.value;
        const email = this.userService.user?.email || '';
         
        this.commentsService.createComment(this.courseId, comment, email).subscribe(() => {
            this.router.navigate([`/courses/${this.courseId}/comments`]);
        });
    }

    isOwner(ownerId: string) {
        const isOwnerUser = ownerId === this.userService.user?._id;
        return isOwnerUser;
    }

    delete(commentId: string) { 
        this.commentsService.removeComment(commentId).subscribe({
        next: () => {
            this.router.navigate([`/courses/${this.courseId}/comments`]);
        },
        error: () => {
            this.router.navigate(['/error']);
        },
    });
    }
}