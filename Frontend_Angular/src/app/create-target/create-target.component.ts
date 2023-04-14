import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router module
import { CreateSavingsService } from 'app/create-savings-goal/service/create-savings.service';


@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css'],
})
export class CreateTargetComponent implements OnInit {
  selectedPercentage: number = 0;
  selectedFrequency: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  termsAndConditions: boolean = false;
  percentages: number[] = [0, 10, 20, 30, 40, 50];
  frequencies: string[] = ['Daily', 'Weekly', 'Monthly'];
  savings: any;
  amountSaved!: number;
  targetAmount!: number;
  errorMessage: string | null = null;
  formValid: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private createSavings: CreateSavingsService
  ) {} // Inject Router module
  ngOnInit() {
    this.fetchDataFromBackend();
    // Fetch data from backend
    this.getSavings();
  }
  getSavings() {
    this.savings = this.createSavings.getStoreSavings();
    // console.log(this.savings)
  }

  checkForm() {
    if (
      this.targetAmount &&
      this.percentages &&
      this.frequencies &&
      this.startDate &&
      this.endDate
    ) {
      this.formValid = null; // all fields have a truthy value, so form is valid
    } else {
      const emptyFields = [];
      if (!this.targetAmount) emptyFields.push('Target Amount');
      if (!this.percentages) emptyFields.push('Percentage');
      if (!this.frequencies) emptyFields.push('Frequency');
      if (!this.startDate) emptyFields.push('Start Date');
      if (!this.endDate) emptyFields.push('End Date');
      this.formValid = `Please fill in the following fields: ${emptyFields.join(
        ', '
      )}`;
    }
  }


  checkInputNumber() {
    if (this.targetAmount > 1000 && this.targetAmount < 9999999999999) {
      this.errorMessage = null;
    } else {
      this.errorMessage =
        'Invalid input. Please enter a number greater than 1000';
    }
  }

  onSubmit() {
    this.checkForm();
    // Prepare form data
    const formData = {
      percentage: this.selectedPercentage,
      frequency: this.selectedFrequency,
      startDate: this.startDate,
      endDate: this.endDate,
      termsAndConditions: this.termsAndConditions,
    };

    // Send form data to backend API
    this.http.post('http://localhost:3000/create-target', formData).subscribe(
      (response) => {
        // Handle success
        console.log('Form submitted successfully', response);
        // Redirect to a new page after successful form submission
        this.router.navigate(['/success']);
      },
      (error) => {
        // Handle error
        console.error('Failed to submit form', error);
      }
    );
  }

  onClick() {
    this.router.navigate(['/create-savings']);
  }

  onOptionSelected(event: any) {
    // Get the selected percentage from the event object and parse it as a number
    this.selectedPercentage = parseInt(event.target.value, 10);

    // Calling the function to fetch data from backend
    this.fetchDataFromBackend();
  }

  fetchDataFromBackend() {
    // Sending the selected percentage as a query parameter to the backend
    this.http
      .get('//localhost:3000/create-target', {
        params: { percentage: this.selectedPercentage.toString() },
      })
      .subscribe((data: any) => {
        this.amountSaved = data.value; // to update the value in the component
      });
  }

  onTargetAmount() {
    // Make HTTP request to send the value to the backend
    this.http
      .post('//localhost:3000/create-target', {
        targetAmount: this.targetAmount,
      })
      .subscribe(
        (response) => {
          // Handle the response from the backend
          console.log(response);
        },
        (error) => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
  }
}
