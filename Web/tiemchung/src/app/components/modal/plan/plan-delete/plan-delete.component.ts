import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';

@Component({
  selector: 'app-plan-delete',
  templateUrl: './plan-delete.component.html',
  styleUrls: ['./plan-delete.component.scss']
})
export class PlanDeleteComponent implements OnInit {
  @Input() fromParent;
  constructor(private injectedPlanService: InjectedPlanService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onDelete = () => {
    this.injectedPlanService.deleteInjectedPlan(this.fromParent.id).then(data => {
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
