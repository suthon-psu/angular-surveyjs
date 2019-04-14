import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as Survey from "survey-angular";

@Component({
  selector: "survey",
  template: `
    <div class="survey-container contentcontainer codecontainer">
      <div id="surveyElement"></div>
    </div>
  `
})
export class SurveyComponent {
  @Output()
  submitSurvey = new EventEmitter<any>()
  
  @Input()
  set json(value: object) {
    const surveyModel = new Survey.Model(value);
    surveyModel.onComplete
      .add(result =>
        this.submitSurvey.emit(result.data)
      );
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }

  ngOnInit() {}
}
