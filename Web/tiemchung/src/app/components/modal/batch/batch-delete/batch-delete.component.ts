import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-batch-delete',
  templateUrl: './batch-delete.component.html',
  styleUrls: ['./batch-delete.component.scss']
})
export class BatchDeleteComponent implements OnInit {
  @Input() fromParent;

  constructor(private activeModal: NgbActiveModal, private vaccineService: VaccineService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDelete = () => {
    this.vaccineService.deleteVaccineBatch(this.fromParent.vaccineId, this.fromParent.batchId).then(() => {
      this.toastr.success('Delete batch success', 'Success');
      this.activeModal.close();
    }).catch((err) => {
      console.log(err);
    });
  }

  closeModal = (sendData: any) => {
    this.activeModal.close(sendData);
  }
}
