import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';

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
  })

  constructor(private injectedPlanService: InjectedPlanService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave = () => {
    this.injectedPlanService.createInjectedPlan(this.createPlanForm.value).then(data => {
      console.log(data);
      this.activeModal.close();
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal = (sendData) => {
    this.activeModal.close(sendData);
  }

}
