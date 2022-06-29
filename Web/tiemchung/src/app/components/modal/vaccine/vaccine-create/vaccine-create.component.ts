import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vaccine-create',
  templateUrl: './vaccine-create.component.html',
  styleUrls: ['./vaccine-create.component.scss']
})
export class VaccineCreateComponent implements OnInit {
  createVaccineForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    origin: new FormControl('', [Validators.required]),
  })
  constructor(private vaccineService: VaccineService, public activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSave = () => {
    console.log(this.createVaccineForm)
    if (this.createVaccineForm.valid) {
      this.vaccineService.createVaccine(this.createVaccineForm.value).then(data => {
        console.log(data);
        this.createVaccineForm.reset();
        this.toastr.success('Create vaccine successfully!', 'Success');
        this.activeModal.close();
      }).catch(err => {
        console.log(err);
      });
    }
    else {
      this.toastr.warning('Please fill all required fields!', 'Warning');
    }
  }

  closeModal = (sendData) => {
    this.activeModal.close(sendData);
  }

}
