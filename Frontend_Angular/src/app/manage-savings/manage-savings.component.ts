import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-savings',
  templateUrl: './manage-savings.component.html',
  styleUrls: ['./manage-savings.component.css']
})
export class ManageSavingsComponent {
  constructor(private router: Router, private http: HttpClient) { }

  onCreateSavingsClick(){
    setTimeout(()=>{
      this.router.navigate(['/create-savings']);
    }, 1000) // 1 seconds timeout
    
  }
  onCreateButtonClick(){
    setTimeout(()=>{
      this.router.navigate(['/savings-tracker']);
    }, 1000) //1 seconds timeout
    
  }
}
