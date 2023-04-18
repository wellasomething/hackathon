import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  IsTrue: boolean = false;
  loginError: boolean = false;
  hidePassword = true;
  showPassword() {
    this.hidePassword = !this.hidePassword;
  }

  @ViewChild('input_email') input_email!: ElementRef;
  @ViewChild('input_password') input_password!: ElementRef;
  isLoading: boolean | undefined;

  
  constructor(
    private http: HttpClient,
    private red: Renderer2,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    this.email = ''; // initialize username with an empty string
    this.password = '';
  }
  

  onSubmit() {
   
    const data = {
      email: this.red.selectRootElement(this.input_email['nativeElement'])
        .value,
      password: this.red.selectRootElement(this.input_password['nativeElement'])
        .value,
    };

    this.http
      .post<{ success: boolean }>('http://localhost:3000/', data)
      .subscribe(
        (response) => {
          // Handle successful authentication here
          if (response.success) {

            this.spinner.hide();
            setTimeout(()=>{
              // Navigate to welcome page if authentication was successful
            this.router.navigate(['/dashboard'])
            }, 3000)
            ;
          } else {
            this.loginError = true;
          }
        },
        (error) => {
          // Handle authentication error here
          this.IsTrue = true;

        }
      );
  }
}

