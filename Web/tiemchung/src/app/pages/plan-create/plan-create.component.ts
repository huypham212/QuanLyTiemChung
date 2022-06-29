import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectedPlanService } from './../../services/injected-plan/injected-plan.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { dateFormat } from 'src/app/utils/dateFormat';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    spellcheck: false,
    height: '550px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: 'Times New Roman',
    defaultFontSize: '4',
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
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
  }

  constructor(private injectedPlanService: InjectedPlanService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSave = () => {
    // console.log(this.createPlanForm.value.content);
    let data = {
      title: this.createPlanForm.value.title,
      content: this.createPlanForm.value.content,
      implementationDate: dateFormat(this.createPlanForm.value.implementationDate, 'dd/MM/yyyy'),
      implementationLocation: this.createPlanForm.value.implementationLocation,
    }
    this.injectedPlanService.createInjectedPlan(data).then(data => {
      console.log(data);
      this.router.navigate(['/plan']);
      this.toastr.success('Tạo kế hoạch tiêm thành công!', 'Success');
    }).catch(err => {
      this.toastr.error('Tạo kế hoạch tiêm thất bại!', 'Error');
    });
  }

}
