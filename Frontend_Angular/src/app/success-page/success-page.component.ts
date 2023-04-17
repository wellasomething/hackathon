import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  constructor(private router: Router, private http: HttpClient) { }

  onClick(){
    this.http.post('//localhost:3000/success', {}).subscribe(response =>{
      this.router.navigate(['/savings-tracker']);
    })
  }
}
