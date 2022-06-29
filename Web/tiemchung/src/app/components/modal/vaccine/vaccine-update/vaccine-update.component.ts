import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vaccine-update',
  templateUrl: './vaccine-update.component.html',
  styleUrls: ['./vaccine-update.component.scss']
})
export class VaccineUpdateComponent implements OnInit {
  @Input() fromParent;
  updateVaccineForm = new FormGroup({
    name: new FormControl(''),
    origin: new FormControl(''),
  })

  constructor(private vaccineService: VaccineService, public activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vaccineService.getVaccineByID(this.fromParent.id).then(data => {
      console.log(data.val());
      this.updateVaccineForm.patchValue({
        name: data.val().name,
        origin: data.val().origin,
      })
    }).catch(err => {
      console.log(err);
    });
  }

  onSave = () => {
    if (this.updateVaccineForm.valid) {
      this.vaccineService.updateVaccine(this.fromParent.id, this.updateVaccineForm.value).then(data => {
        console.log(data);
        this.updateVaccineForm.reset();
        this.toastr.success('Update vaccine successfully!', 'Success');
        this.activeModal.close();
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.toastr.warning('Please fill all required fields!', 'Warning');
    }
  }

  closeModal = (sendData) => {
    this.activeModal.close(sendData);
  }

}
