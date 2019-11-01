import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable()

export class AuthGuard implements CanActivate {
    base_url: string;

    constructor(private router: Router, private authService: AuthService){

    }
    
    canActivate(){

        // verifica se existe token
        if(this.authService.isAuthenticated()){
            return true;
        } else {
            this.router.navigate(['/acesso-negado']);
            return false;
        }
    }
}


