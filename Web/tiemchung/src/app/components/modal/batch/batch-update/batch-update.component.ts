import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { dateFormat } from 'src/app/utils/dateFormat';

@Component({
  selector: 'app-batch-update',
  templateUrl: './batch-update.component.html',
  styleUrls: ['./batch-update.component.scss']
})
export class BatchUpdateComponent implements OnInit {
  @Input() fromParent;
  updateBatchForm = new FormGroup({
    batchNumber: new FormControl(''),
    amounts: new FormControl(0),
    dateIn: new FormControl(''),
    dateExp: new FormControl(''),
  })


  constructor(private vaccineService: VaccineService, public activeModal: NgbActiveModal, private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vaccineService.getVaccineBatchByID(this.fromParent.vaccineId, this.fromParent.batchId).then((data) => {

      var dateInParts = data.val().dateIn.split("/");
      var dateExpParts = data.val().dateExp.split("/");

      // month is 0-based, that's why we need dataParts[1] - 1
      var dateInObject = new Date(+dateInParts[2], dateInParts[1] - 1, +dateInParts[0]);
      var dateExpObject = new Date(+dateExpParts[2], dateExpParts[1] - 1, +dateExpParts[0]);

      this.updateBatchForm.patchValue({
        batchNumber: this.fromParent.batchId,
        amounts: data.val().amounts,
        dateIn: this.datePipe.transform(dateInObject, 'yyyy-MM-dd'),
        dateExp: this.datePipe.transform(dateExpObject, 'yyyy-MM-dd'),
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  onSave = () => {
    let data = {
      amounts: this.updateBatchForm.value.amounts,
      dateIn: dateFormat(this.updateBatchForm.value.dateIn, 'dd/MM/yyyy'),
      dateExp: dateFormat(this.updateBatchForm.value.dateExp, 'dd/MM/yyyy'),
    }

    this.vaccineService.updateVaccineBatch(this.fromParent.vaccineId, this.fromParent.batchId, data).then(() => {
      this.activeModal.close();
      this.updateBatchForm.reset();
      this.toastr.success('Cập nhật thông tin lô vaccine thành công!', 'Success');
    }).catch((err) => {
      console.log(err);
    });
  }

  closeModal = (sendData: any) => {
    this.activeModal.close(sendData);
  }
}
