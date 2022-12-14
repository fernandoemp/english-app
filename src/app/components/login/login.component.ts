import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from '../../core/classes/user.class';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginSubs?: Subscription;
  error: any = undefined;
  myForm: FormGroup;

  constructor(private _userService: UserService, private _router: Router, private toastr: ToastrService, private _fb: FormBuilder, private localStorageService: LocalStorageService) {
    this.myForm = _fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // this._userService.getUserLoggedIn();
  }

  userLogin(username: string, passowrd: string) {
    // this.loginSubs = this._userService.userLogin(username, passowrd).subscribe(response => {
    //   localStorage.setItem('currentUser', JSON.stringify(response));
    //   this._userService.setUserLoggedIn();
    //   this.toastr.info('Bienvenido ' + this._userService.username);
    //   this._router.navigate(['management']);
    // }, (error => {
    //   this.error = error;
    //   if (error.status == '401') {
    //     this.toastr.warning('Usuario y/o contraseña ingresada es incorrecta');
    //   }
    //   else {
    //     this.toastr.error('Error Desconocido, contacte al administrador');
    //     console.log(error);
    //   }
    // }));
    if(username == "admin" && passowrd == "admin"){
      // localStorage.setItem('currentUser', JSON.stringify({id: "0", username: 'fernando', passowrd: '0', email: "fer@gmail.com", first_name: "fer", "last_name": "ema"} as User));
      // this._userService.setUserLoggedIn();
      let user = new User();
      user.email = username;
      user.firstName = "Fernando";
      user.lastName = "Murguia"
      user.profession = "Tester"
      this.localStorageService.setItem('currentUser', user);
      this.toastr.info("Welcome " + user.lastName + " " + user.firstName)
      this._router.navigate(['home']);
    }else{
      if(username == "arias@gmail.com.ar" && passowrd == "fer123"){
        // localStorage.setItem('currentUser', JSON.stringify({id: "0", username: 'fernando', passowrd: '0', email: "fer@gmail.com", first_name: "fer", "last_name": "ema"} as User));
        // this._userService.setUserLoggedIn();
        let user = new User();
        user.email = username;
        user.firstName = "Jose";
        user.lastName = "Arias";
        user.profession = "Nurse";
        this.localStorageService.setItem('currentUser', user);
        this.toastr.info("Welcome " + user.lastName + " " + user.firstName)
        this._router.navigate(['home']);
      } else{
        if(username == "lopez@gmail.com.ar" && passowrd == "fer123"){
          // localStorage.setItem('currentUser', JSON.stringify({id: "0", username: 'fernando', passowrd: '0', email: "fer@gmail.com", first_name: "fer", "last_name": "ema"} as User));
          // this._userService.setUserLoggedIn();
          let user = new User();
          user.email = username;
          user.firstName = "Maria";
          user.lastName = "Lopez";
          user.profession = "Doctor";
          this.localStorageService.setItem('currentUser', user);
          this.toastr.info("Welcome " + user.lastName + " " + user.firstName)
          this._router.navigate(['home']);
        }
        else{
          this.toastr.error("Username or password is invalid");
        }
      }
    }
    
   
  }

  ngOnDestroy(): void {
  }
}




