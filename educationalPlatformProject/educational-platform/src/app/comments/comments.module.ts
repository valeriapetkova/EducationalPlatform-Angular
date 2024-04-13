import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CommentsListComponent } from "./comments-list/comments-list.component";

@NgModule({
    declarations: [CommentsListComponent],
    imports: [CommonModule, FormsModule],
    exports: [CommentsListComponent],
})

export class CommentsModule {}