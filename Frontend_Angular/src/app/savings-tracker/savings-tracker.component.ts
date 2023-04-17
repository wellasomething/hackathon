import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router module
@Component({
  selector: 'app-savings-tracker',
  templateUrl: './savings-tracker.component.html',
  styleUrls: ['./savings-tracker.component.css'],
})
export class SavingsTrackerComponent implements OnInit {
  endDate: Date = new Date();
  targetAmount: any;
  amountSaved: any;
  interestEarned: any;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from backend
    this.http.get('//localhost:3000/savings-tracker').subscribe((data: any) => {
      this.targetAmount = data.targetAmount; // Update targetAmount in the component
      this.amountSaved = data.amountSaved; // Update amountSaved in the component
      this.interestEarned = data.interestEarned;
    });
  }

  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  cancelPlan() {
    // Make an HTTP POST request to your Node.js backend endpoint
    this.http.post('//localhost:3000/savings-tracker', {}).subscribe(response => {
      this.showPopup = false;
      setTimeout(()=>{
        this.router.navigate(['/create-savings'])
      }, 1000);
      
    }, error => {
      // Handle any error that occurs during the HTTP request
      console.error('Failed to cancel plan:', error);
    });
  }

  exitPlan(){
    this.showPopup = false;

  }

  onWithdraw(){
    this.http.post('//localhost:3000/savings-tracker', {}).subscribe(response =>{
      this.router.navigate(['/create-savings']);
    })
  }

  onClick() {
    this.router.navigate(['/manage-savings']);
  }
  ProceedToCancelSavings: boolean = false;

  // endDateTime = this.endDate;
}
