import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanCreateComponent } from 'src/app/components/modal/plan/plan-create/plan-create.component';
import { PlanDeleteComponent } from 'src/app/components/modal/plan/plan-delete/plan-delete.component';
import { PlanUpdateComponent } from 'src/app/components/modal/plan/plan-update/plan-update.component';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';

@Component({
  selector: 'app-injected-plan',
  templateUrl: './injected-plan.component.html',
  styleUrls: ['./injected-plan.component.scss']
})
export class InjectedPlanComponent implements OnInit {

  constructor(private injectedPlanService: InjectedPlanService, private modalService: NgbModal, private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  fetchData = () => {
    this.injectedPlanService.getAllInjectedPlan().then(data => {
      for (let item of Object.entries(data.val())) {
        console.log(item);
      }
    });
  }

  createPlan = () => {
    const modalRef = this.modalService.open(PlanCreateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });
  }

  updatePlan = () => {
    const modalRef = this.modalService.open(PlanUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });
  }

  deletePlan = () => {
    const modalRef = this.modalService.open(PlanDeleteComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });
  }
}
