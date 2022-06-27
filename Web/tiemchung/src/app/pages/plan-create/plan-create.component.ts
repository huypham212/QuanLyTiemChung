import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InjectedPlanService } from './../../services/injected-plan/injected-plan.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.scss']
})
export class PlanCreateComponent implements OnInit {
  createPlanForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    implementationDate: new FormControl(''),
    implementationLocation: new FormControl(''),
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
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
    this.injectedPlanService.createInjectedPlan(this.createPlanForm.value).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

}
