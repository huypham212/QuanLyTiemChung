import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vaccine-delete',
  templateUrl: './vaccine-delete.component.html',
  styleUrls: ['./vaccine-delete.component.scss']
})
export class VaccineDeleteComponent implements OnInit {
  @Input() fromParent;

  constructor(private vaccineService: VaccineService, public activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDelete = () => {
    this.vaccineService.deleteVaccine(this.fromParent.id).then(data => {
      console.log(data);
      this.toastr.success('Delete vaccine successfully!', 'Success');
      this.activeModal.close();
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal = (sendData) => {
    this.activeModal.close(sendData);
  }

}
