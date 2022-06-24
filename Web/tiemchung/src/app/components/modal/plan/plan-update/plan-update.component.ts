import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';

@Component({
  selector: 'app-plan-update',
  templateUrl: './plan-update.component.html',
  styleUrls: ['./plan-update.component.scss']
})
export class PlanUpdateComponent implements OnInit {
  @Input() fromParent;
  updatePlanForm = new FormGroup({
    title: new FormControl('Kế hoạch tiêm chủng xã Vĩnh Thạnh'),
    content: new FormControl('Chi tiết kế hoạch tiêm chủng vaccine phòng chống dịch ở xã Vĩnh Thạnh ngày "15/06/2022"'),
    implementationDate: new FormControl('15/06/2022'),
    implementationLocation: new FormControl('TYT xã Vĩnh Thạnh'),
  })

  constructor(private injectedPlanService: InjectedPlanService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave = () => {
    this.injectedPlanService.updateInjectedPlan(this.fromParent.id, this.updatePlanForm.value).then(data => {
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
