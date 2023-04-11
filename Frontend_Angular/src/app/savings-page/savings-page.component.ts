import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-savings-page',
  templateUrl: './savings-page.component.html',
  styleUrls: ['./savings-page.component.css']
})
export class SavingsPageComponent {

  totalBalance!: number;

  constructor(private http: HttpClient) { }

  onSubmit() {
    // Make an HTTP POST request to update totalBalance in Node.js backend
    this.http.post('//localhost:3000/savings', { totalBalance: this.totalBalance })
      .subscribe((response: any) => {
        // Handle response from backend if needed
        console.log(response);
      });
  }
 
}
