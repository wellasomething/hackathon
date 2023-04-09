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
    }, 3000) // 3 seconds timeout
    
  }
  onCreateButtonClick(){
    setTimeout(()=>{
      this.router.navigate(['/savings-tracker']);
    }, 3000) //3 seconds timeout
    
  }
}
