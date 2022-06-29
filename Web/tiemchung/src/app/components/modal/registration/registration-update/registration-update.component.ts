import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectedRegistrationService } from 'src/app/services/injected-registration/injected-registration';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration-update',
  templateUrl: './registration-update.component.html',
  styleUrls: ['./registration-update.component.scss']
})
export class RegistrationUpdateComponent implements OnInit {
  @Input() fromParent;

  updateRegistrationForm = new FormGroup({
    nameLocation: new FormControl('TYT xã Vĩnh Thạnh'),
    vaccineName: new FormControl('VACCINE COVID-19 AstraZeneca'),
    registrationDate: new FormControl('16/07/2022'),
    status: new FormControl('Waiting Approve'),
  })

  constructor(private injectedRegistrationService: InjectedRegistrationService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave() {
    this.injectedRegistrationService.updateInjectedRegistration(this.fromParent.uid, this.fromParent.registrationId, this.updateRegistrationForm.value).then(data => {
      console.log(data);
      this.activeModal.close();
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
