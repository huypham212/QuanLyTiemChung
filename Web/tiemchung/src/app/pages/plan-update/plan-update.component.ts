import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';
import { dateFormat } from 'src/app/utils/dateFormat';
import { DatePipe } from '@angular/common';
import { InjectedLocationService } from './../../services/injected-location/injected-location.service';
import { ToastrService } from 'ngx-toastr';

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
  injectedLocationData: any[] = [];


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '550px',
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

  constructor(private router: Router, private toastr: ToastrService, private injectedPlanService: InjectedPlanService, private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private injectedLocationService: InjectedLocationService) { }

  ngOnInit(): void {
    this.injectedPlanService.getPlanByID(this.activatedRoute.snapshot.params.id).then(data => {

      var dateParts = data.val().implementationDate.split("/");
      // month is 0-based, that's why we need dataParts[1] - 1
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

      this.updatePlanForm.patchValue({
        title: data.val().title,
        content: data.val().content,
        implementationDate: this.datePipe.transform(dateObject, 'yyyy-MM-dd'),
        implementationLocation: data.val().implementationLocation
      });

      console.log(this.updatePlanForm.value)

    }
    ).catch(err => {
      console.log(err);
    });

    //Call service to get injected location data
    this.injectedLocationService.getAllInjectedLocation().then((res) => {

      for (let item of Object.entries(res.val())) {
        this.injectedLocationData.push(item[1]);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  onSave = () => {
    let data = {
      title: this.updatePlanForm.value.title,
      content: this.updatePlanForm.value.content,
      implementationDate: dateFormat(this.updatePlanForm.value.implementationDate, 'dd/MM/yyyy'),
      implementationLocation: this.updatePlanForm.value.implementationLocation,
    }

    this.injectedPlanService.updateInjectedPlan(this.activatedRoute.snapshot.params.id, data).then(data => {
      this.toastr.success('Cập nhật kế hoạch tiêm thành công!', "Success");
      this.router.navigate(['/plan']);
    }).catch(err => {
      this.toastr.error('Cập nhật kế hoạch tiêm thất bại!', "Error");
    });
  }
}
