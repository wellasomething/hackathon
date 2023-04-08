import { Component } from '@angular/core';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent {

  selectedPercentage: number = 0;
  selectedFrequency: string = '';
  startDate: string  ="";
  endDate: string = '';
  termsAndConditions: boolean = false;
  percentages: number[] = [10, 20, 30, 40, 50];
  frequencies: string[] = ['Weekly', 'Biweekly', 'Monthly', 'Quarterly', 'Yearly'];

  onSubmit() {
  }

}
