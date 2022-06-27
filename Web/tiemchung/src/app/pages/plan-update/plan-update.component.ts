import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';

@Component({
  selector: 'app-plan-update',
  templateUrl: './plan-update.component.html',
  styleUrls: ['./plan-update.component.scss']
})
export class PlanUpdateComponent implements OnInit {

  updatePlanForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    implementationDate: new FormControl(''),
    implementationLocation: new FormControl(''),
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '220px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  }

  constructor(private injectedPlanService: InjectedPlanService) { }

  ngOnInit(): void {
  }

  onSave = () => {
    this.injectedPlanService.updateInjectedPlan("id", this.updatePlanForm.value).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }
}
