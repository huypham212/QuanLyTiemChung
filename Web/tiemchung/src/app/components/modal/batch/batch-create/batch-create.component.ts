import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { dateFormat } from 'src/app/utils/dateFormat';

@Component({
  selector: 'app-batch-create',
  templateUrl: './batch-create.component.html',
  styleUrls: ['./batch-create.component.scss']
})
export class BatchCreateComponent implements OnInit {
  @Input() fromParent;
  createBatchForm = new FormGroup({
    batchNumber: new FormControl(''),
    amounts: new FormControl(0),
    dateIn: new FormControl(''),
    dateExp: new FormControl(''),
  })

  constructor(private vaccineService: VaccineService, public activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSave = () => {
    let data = {
      amounts: this.createBatchForm.value.amounts,
      dateIn: dateFormat(this.createBatchForm.value.dateIn, 'dd/MM/yyyy'),
      dateExp: dateFormat(this.createBatchForm.value.dateExp, 'dd/MM/yyyy'),
    }

    this.vaccineService.createVaccineBatch(this.fromParent.vaccineID, this.createBatchForm.value.batchNumber, data).then(() => {
      this.toastr.success('Create batch success', 'Success');
      this.activeModal.close();
    }).catch((err) => {
      console.log(err);
    });
  }

  closeModal = (sendData: any) => {
    this.activeModal.close(sendData);
  }

}
