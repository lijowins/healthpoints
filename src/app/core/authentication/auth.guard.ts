import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: DataService
    ) {}

    canActivate() {
        const currentUser = this.authenticationService.currentUser;
        if (currentUser) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/']);
        return false;
    }
}