import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanDeleteComponent } from 'src/app/components/modal/plan/plan-delete/plan-delete.component';
import { InjectedPlanService } from 'src/app/services/injected-plan/injected-plan.service';

@Component({
  selector: 'app-injected-plan',
  templateUrl: './injected-plan.component.html',
  styleUrls: ['./injected-plan.component.scss']
})
export class InjectedPlanComponent implements OnInit {
  planData: any[] = [];

  constructor(private injectedPlanService: InjectedPlanService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData = () => {
    this.injectedPlanService.getAllInjectedPlan().then(data => {
      for (let item of Object.entries(data.val())) {
        this.planData.push(item);
      }
    });
  }

  createPlan = () => {
    this.router.navigate(['/plan/create']);
  }

  deletePlan = (id: string) => {
    const modalRef = this.modalService.open(PlanDeleteComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      id: id
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });

    modalRef.closed.subscribe((result) => {
      this.fetchData();
    });
  }
}
