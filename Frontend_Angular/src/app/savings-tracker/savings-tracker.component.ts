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
    // Add your cancel plan logic here
    // This method will be called when the user clicks on the "Cancel Plan" button inside the popup
  }
  exitPlan(){
    this.showPopup = false;

  }

  onClick() {
    this.router.navigate(['/manage-savings']);
  }
  ProceedToCancelSavings: boolean = false;

  // endDateTime = this.endDate;
}
