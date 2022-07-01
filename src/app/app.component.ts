import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Ata';
  items:any= [
    {
      description: "breakfast", action:"No"},
      {description: "gym", action:"No"},
      {description: "work", action:"No"},
      {description: "paying for bills", action:"No"},
  ];
}
