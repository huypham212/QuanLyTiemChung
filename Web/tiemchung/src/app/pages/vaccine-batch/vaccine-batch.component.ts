import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { BatchCreateComponent } from 'src/app/components/modal/batch/batch-create/batch-create.component';
import { BatchUpdateComponent } from 'src/app/components/modal/batch/batch-update/batch-update.component';
import { BatchDeleteComponent } from 'src/app/components/modal/batch/batch-delete/batch-delete.component';

@Component({
  selector: 'app-vaccine-batch',
  templateUrl: './vaccine-batch.component.html',
  styleUrls: ['./vaccine-batch.component.scss']
})
export class VaccineBatchComponent implements OnInit {
  vaccineName: string;
  batchData: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private vaccineService: VaccineService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData = () => {
    this.batchData = [];
    this.vaccineService.getVaccineByID(this.activatedRoute.snapshot.params['id']).then((res) => {
      this.vaccineName = res.val().name;
      for (let item of Object.entries(res.val().batchs)) {
        this.batchData.push(item);
      }
    })
  }

  onCreate = () => {
    const modalCreateRef = this.modalService.open(BatchCreateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      vaccineID: this.activatedRoute.snapshot.params['id'],
    }

    modalCreateRef.componentInstance.fromParent = data;

    modalCreateRef.result.then((res) => {
      console.log(res)
    }, (reason) => {

    }).then(() => {
      this.fetchData();
    });

    modalCreateRef.closed.subscribe((result) => {
      console.log(result);
    });
  }

  onUpdate = (id: string) => {
    const modalUpdateRef = this.modalService.open(BatchUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      vaccineId: this.activatedRoute.snapshot.params['id'],
      batchId: id,
    }

    modalUpdateRef.componentInstance.fromParent = data;

    modalUpdateRef.result.then((res) => {
      console.log(res)
    }, (reason) => {

    }).then(() => {
      this.fetchData();
    });

    modalUpdateRef.closed.subscribe((result) => {
      console.log(result);
    });
  }

  onDelete = (id: string) => {
    const modalDeleteRef = this.modalService.open(BatchDeleteComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      vaccineId: this.activatedRoute.snapshot.params['id'],
      batchId: id,
    }

    modalDeleteRef.componentInstance.fromParent = data;

    modalDeleteRef.result.then((res) => {
      console.log(res)
    }, (reason) => { }).then(() => {
      this.fetchData();
    });

    modalDeleteRef.closed.subscribe((result) => {
      console.log(result);
    });
  }
}
