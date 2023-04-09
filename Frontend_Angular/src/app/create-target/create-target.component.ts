import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router module

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css'],
})
export class CreateTargetComponent {
  selectedPercentage: number = 0;
  selectedFrequency: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  termsAndConditions: boolean = false;
  percentages: number[] = [10, 20, 30, 40, 50];
  frequencies: string[] = [
    'daily',
    'weekly',
    'Monthly',
  ];

  constructor(private http: HttpClient, private router: Router) {} // Inject Router module

  onSubmit() {
    // Prepare form data
    const formData = {
      percentage: this.selectedPercentage,
      frequency: this.selectedFrequency,
      startDate: this.startDate,
      endDate: this.endDate,
      termsAndConditions: this.termsAndConditions,
    };

    // Send form data to backend API
    this.http.post('http://localhost:3000/', formData)
      .subscribe(
        response => {
          // Handle success
          console.log('Form submitted successfully', response);
          // Redirect to a new page after successful form submission
          this.router.navigate(['/success']);
        },
        error => {
          // Handle error
          console.error('Failed to submit form', error);
        }
      );
  }

  onClick(){
    this.router.navigate(['/create-savings'])
  }
}
