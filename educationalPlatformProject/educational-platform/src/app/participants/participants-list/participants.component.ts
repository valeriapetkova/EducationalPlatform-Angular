import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Participant } from "src/app/types/participant";
import { ParticipantsService } from "../participants.service";

@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.css'],
})

export class ParticipantsComponent implements OnInit {
    participants: Participant[] | null = [];
    courseId: string = '';
    @Input() owner: string = '';
    
    constructor(private participantsService: ParticipantsService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}
    
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.courseId = data['courseId'];

            this.participantsService.getAll(this.courseId).subscribe((participants) => {
                this.participants = participants;
            });

            const userId = this.userService.user?._id;

            this.participantsService.getJoinedParticipant(this.courseId, userId).subscribe({
                next: () => {
                    this.router.navigate([`/courses/${this.courseId}`]);
                },
                error: () => {
                    this.router.navigate(['/error']);
                },
            });
            
            
        });
        
    }
    
    hasOwner() {
        const isOwnerUser = this.owner === this.userService.user?._id;
        return isOwnerUser;
    }
        
    get joined(): boolean {
        if (this.participantsService.hasParticipant === 0) {
            return false;
        } else {
            return true;
        }
    }
        
    join() {
        this.participantsService.create(this.courseId, this.userService.user?.email).subscribe({
            next: () => {
                this.router.navigate([`/courses/${this.courseId}/joined`]);
            },
            error: () => {
                this.router.navigate(['/error']);
            },
        })
    }
}
