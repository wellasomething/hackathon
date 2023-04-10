import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router module
@Component({
  selector: 'app-savings-tracker',
  templateUrl: './savings-tracker.component.html',
  styleUrls: ['./savings-tracker.component.css']
})
export class SavingsTrackerComponent {
  router: any;
  onClick(){
    this.router.navigate(['/manage-savings'])
  }

}
