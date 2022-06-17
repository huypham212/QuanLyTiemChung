import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  @Input() fromParent;
  model: NgbDateStruct;
  userData: any;
  updateUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    idCard: new FormControl(''),
    details: new FormControl(''),
    commune: new FormControl(''),
    city: new FormControl(''),
    province: new FormControl('')
  })

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.userService.getUserByUID(this.fromParent.id).then(data => {
      this.userData = data.val();
      this.updateUserForm.patchValue({
        name: this.userData.name,
        email: this.userData.email,
        dob: this.datePipe.transform(this.userData.dob, 'yyyy-MM-dd'),
        phone: this.userData.phone,
        gender: this.userData.gender,
        idCard: this.userData.idCard,
        details: this.userData.address.details,
        commune: this.userData.address.commune,
        city: this.userData.address.city,
        province: this.userData.address.province
      })
      console.log(this.fromParent.id);
    }).catch(err => {
      console.log(err);
    })
  }


  onSave() {

  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }
}
