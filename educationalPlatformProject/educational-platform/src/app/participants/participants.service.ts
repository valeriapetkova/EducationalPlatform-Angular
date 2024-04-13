import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Participant } from "../types/participant";
import { tap } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class ParticipantsService {

    constructor(private http: HttpClient) {}

    hasParticipant: number | undefined;

    get isJoined(): boolean {
        return !!this.hasParticipant;
    }

    getJoinedParticipant (courseId: string, userId: string | undefined) {
        const query = `where=${encodeURIComponent(`courseId="${courseId}"`)}%20and%20${encodeURIComponent(`_ownerId="${userId}"`)}&count`;
        return this.http.get<number>(`/api/data/participants?${query}`) 
                .pipe(tap((p) => this.hasParticipant = p))
    }
    
    getAll (courseId: string) {
        const query = new URLSearchParams({
            where: `courseId="${courseId}"`,
            load: `owner=_ownerId:users`,
        });

        return this.http.get<Participant[]>(`/api/data/participants?${query}`)
    }

    create(courseId: string, email: string | undefined) {
        return this.http.post<Participant>(`/api/data/participants`, { courseId, email })
    }
}