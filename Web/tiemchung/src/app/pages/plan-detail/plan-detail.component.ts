import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit {

  detailPlan = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    implementationDate: new FormControl(''),
    implementationLocation: new FormControl(''),
  });

  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: '550px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
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

  constructor(private planService: InjectedPlanService, private activatedRoute: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.planService.getPlanByID(this.activatedRoute.snapshot.params.id).then(data => {
      var dateParts = data.val().implementationDate.split("/");
      // month is 0-based, that's why we need dataParts[1] - 1
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

      this.detailPlan.patchValue({
        title: data.val().title,
        content: data.val().content,
        implementationDate: this.datePipe.transform(dateObject, 'yyyy-MM-dd'),
        implementationLocation: data.val().implementationLocation
      });
    }
    ).catch(err => {
      console.log(err);
    });

  }

}
