import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { ErrorService } from "./core/error/error.service";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { baseUrl } from "./constants";
import { UserService } from "./user/user.service";

const { apiUrl } = baseUrl;

@Injectable()
class AppInterceptor implements HttpInterceptor {
    API = '/api';

    constructor(private errorService: ErrorService, private router: Router, private userService: UserService) {}

    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        const token = this.userService.user?.accessToken;

        if (req.url.startsWith(this.API)) {
            req = req.clone({
              url: req.url.replace(this.API, apiUrl),
            });
        }

        if (token) {
            req = req.clone({
              headers: req.headers.set('X-Authorization', token),
            });
        }

        return next.handle(req).pipe(
            catchError((err) => {
                if (err.status === 401) {
                    this.router.navigate(['/home']);
                } else {
                    this.errorService.setError(err);
                    this.router.navigate(['/error']);
                }

                return [err];
            })
        );
    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
};