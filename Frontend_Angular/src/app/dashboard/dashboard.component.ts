import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router, private http: HttpClient) { }

  onClick(){
    setTimeout(()=>{
      this.router.navigate(['/manage-savings'])
    }, 1000) //timeout for 1second
    
  }
}
