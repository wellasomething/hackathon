import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-savings-goal',
  templateUrl: './create-savings-goal.component.html',
  styleUrls: ['./create-savings-goal.component.css']
})
export class CreateSavingsGoalComponent {
  constructor(private router: Router, private http: HttpClient) { }

  onAccomodation(){
    setTimeout(()=>{
      this.router.navigate(['/create-target']);
    }, 3000); //10 seconds timeout
    
  }

  onBusiness(){
    setTimeout(()=>{
      this.router.navigate(['/create-target']);
    }, 3000); //10 seconds timeout
  }

  onEmergency(){
    setTimeout(()=>{
      this.router.navigate(['/create-target']);
    }, 3000); //10 seconds timeout
  }

  onOthers(){
    setTimeout(()=>{
      this.router.navigate(['/create-target']);
    }, 3000); //10 seconds timeout
  }
}
