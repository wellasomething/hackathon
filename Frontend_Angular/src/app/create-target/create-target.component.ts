import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router module

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
  percentages: number[] = [10, 20, 30, 40, 50];
  frequencies: string[] = [
    'Daily',
    'Weekly',
    'Monthly',
    'Yearly',
  ];

  // Define a variable to hold the computed value
  amountSaved!: number;
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

 

  ngOnInit() {
    // Fetch data from backend
    this.fetchDataFromBackend();
  }
  
  onOptionSelected(event: any) {
    // Call the function to fetch data from backend
    this.fetchDataFromBackend();

    const selectedValue = event.target.value; // Get selected value from event object
  this.http.post('/localhost:3000/create-target', { inputValue: selectedValue }) // Send HTTP POST request to backend
    .subscribe(response => {
      // Handle response from backend if needed
      console.log(response);
    });
  }
  
  fetchDataFromBackend() {
    this.http.get('//localhost:3000/create-target').subscribe((data: any) => {
      this.amountSaved = data.value; // Update the value in the component
    });
  }

  

// ngOnInit() {
//   // Fetch data from backend
//   this.fetchDataFromBackend();
// }

// onOptionSelected(event: any) {

//   this.fetchDataFromBackend();
//   const selectedValue = event.target.value; // Get selected value from event object

//   // Send HTTP POST request to backend with the selected value
//   this.http.post('/create-target', { inputValue: selectedValue })
//     .subscribe((response: any) => {
//       this.amountSaved = response.value; // Update the value in the component
//     });
// }

// fetchDataFromBackend() {
//   // Fetch data from backend and update the value in the component
//   this.http.get('/create-target').subscribe((response: any) => {
//     this.amountSaved = response.value; // Update the value in the component
//   });
// }
  
}
