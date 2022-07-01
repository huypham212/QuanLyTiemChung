import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectedRegistrationService } from 'src/app/services/injected-registration/injected-registration';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-update',
  templateUrl: './registration-update.component.html',
  styleUrls: ['./registration-update.component.scss']
})
export class RegistrationUpdateComponent implements OnInit {
  @Input() fromParent;

  updateRegistrationForm = new FormGroup({
    registrationLocation: new FormControl(''),
    vaccineName: new FormControl(''),
    registrationDate: new FormControl(''),
    status: new FormControl(''),
  })

  constructor(private injectedRegistrationService: InjectedRegistrationService, private activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.injectedRegistrationService.getInjectedRegistrationByID(this.fromParent.uid, this.fromParent.registrationID).then(data => {
      this.updateRegistrationForm.patchValue(data.val());
    }).catch(err => {
      console.log(err);
    }
    );
  }

  onSave() {
    this.injectedRegistrationService.updateInjectedRegistration(this.fromParent.uid, this.fromParent.registrationID, this.updateRegistrationForm.value).then(data => {
      console.log(data);
      this.activeModal.close();
      this.toastr.success('Cập nhật lịch đăng ký tiêm thành công!', 'Success');
    }).catch(err => {
      this.toastr.error('Cập nhật lịch đăng ký tiêm thất bại!', 'Error');
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
