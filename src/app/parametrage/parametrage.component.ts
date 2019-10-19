import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css']
})
export class ParametrageComponent implements OnInit {
  constructor() {
   }
      comission = 5;
      nombreClient = 10;
      nombreConseiller = 5;
   ngOnInit() {
      }

defaultValue() {
  console.log (' Default values ');
  }

  onSave(paramForm) {
    console.log(paramForm);
}
}
