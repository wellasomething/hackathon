import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateSavingsService } from './service/create-savings.service';

@Component({
  selector: 'app-create-savings-goal',
  templateUrl: './create-savings-goal.component.html',
  styleUrls: ['./create-savings-goal.component.css']
})
export class CreateSavingsGoalComponent implements OnInit {
savingGoals = ["Accommodation", "Business","Education", "Emergency", "Others"]


  totalBalance: string | undefined; // Variable to store the value from backend
  constructor(private router: Router, private http: HttpClient, private createSavings:CreateSavingsService) { }

  ngOnInit() {
    // Fetch data from backend
    this.http.get('//localhost:3000/create-savings').subscribe((data: any) => {
      this.totalBalance = data.value; // Update the value in the component
    });
  }
  onAccomodation(data:any){
    this.createSavings.storeSavingGoals(data)
        setTimeout(()=>{
      this.router.navigate(['/create-target']);
    }, 1000); //1 seconds timeout
    
  }
  onClick(){
    this.router.navigate(['/manage-savings'])
  }
}
