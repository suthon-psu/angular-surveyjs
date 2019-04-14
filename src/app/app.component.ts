import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngs';

  json = {
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "radiogroup1",
            hasOther: true,
            choices: ["One", "Two", "Three"]
          }
        ]
      },
      {
        elements: [
          {
            type: "checkbox",
            name: "checkbox1",
            choices: ["One", "Two", "Three"]
          }
        ]
      }
    ]
  };

  submitSurvey(data){
    console.log(data)
  }
}
