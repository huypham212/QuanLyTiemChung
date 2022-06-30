import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VaccineCreateComponent } from 'src/app/components/modal/vaccine/vaccine-create/vaccine-create.component';
import { VaccineDeleteComponent } from 'src/app/components/modal/vaccine/vaccine-delete/vaccine-delete.component';
import { VaccineUpdateComponent } from 'src/app/components/modal/vaccine/vaccine-update/vaccine-update.component';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})
export class VaccineComponent implements OnInit {
  arrayData = [];
  constructor(private vaccineService: VaccineService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fetchData();
    console.log(this.arrayData);
  }

  fetchData = () => {
    this.arrayData = [];
    this.vaccineService.getAllVaccine().then(data => {
      for (let item of Object.entries(data.val())) {
        this.arrayData.push(item);
      }
    });
  }

  createVaccine = () => {
    const modalRef = this.modalService.open(VaccineCreateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });

    modalRef.result.then((res) => {
      console.log(res)
    }, (reason) => { }).then(() => {
      this.fetchData();
    });

    modalRef.closed.subscribe((result) => {
      console.log(result);
    });

  }

  updateVaccine = (id: string) => {
    const modalRef = this.modalService.open(VaccineUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });

    let data = {
      id: id,
    }

    modalRef.componentInstance.fromParent = data;

    modalRef.result.then((res) => {
      console.log(res)
    }, (reason) => { }).then(() => {
      this.fetchData();
    });

    modalRef.closed.subscribe((result) => {
      console.log(result);
    });
  }

  deleteVaccine = (id: string) => {
    const modalRef = this.modalService.open(VaccineDeleteComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });

    let data = {
      id: id
    }

    modalRef.componentInstance.fromParent = data;

    modalRef.result.then((res) => {
      console.log(res)
    }, (reason) => { }).then(() => {
      this.fetchData();
    });

    modalRef.closed.subscribe((result) => {
      console.log(result);
    });
  }
}
