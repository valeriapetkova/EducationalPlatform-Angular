import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [CommonModule, UserRoutingModule, RouterModule, SharedModule, FormsModule, ReactiveFormsModule],
})

export class UserModule {}