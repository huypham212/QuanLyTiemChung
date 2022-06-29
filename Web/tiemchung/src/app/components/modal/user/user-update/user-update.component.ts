import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/user.model';
import { DatePipe } from '@angular/common';
import { dateFormat } from 'src/app/utils/dateFormat';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  @Input() fromParent;
  model: NgbDateStruct;
  user: User;
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

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getUserByUID(this.fromParent.id).then(data => {
      this.userData = data.val();

      var dateParts = this.userData.dob.split("/");
      // month is 0-based, that's why we need dataParts[1] - 1
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
      // console.log(dateObject);
      this.updateUserForm.patchValue({
        name: this.userData.name,
        email: this.userData.email,
        dob: this.datePipe.transform(dateObject, 'yyyy-MM-dd'),
        phone: this.userData.phone,
        gender: this.userData.gender,
        idCard: this.userData.idCard,
        details: this.userData.address.details,
        commune: this.userData.address.commune,
        city: this.userData.address.city,
        province: this.userData.address.province
      })
      console.log(this.updateUserForm.value.dob);
    }).catch(err => {
      console.log(err);
    })
  }


  onSave() {
    this.user = {
      name: this.updateUserForm.value.name,
      email: this.updateUserForm.value.email,
      dob: dateFormat(this.updateUserForm.value.dob, 'dd/MM/yyyy'),
      phone: this.updateUserForm.value.phone,
      idCard: this.updateUserForm.value.idCard,
      gender: this.updateUserForm.value.gender,
      address: {
        details: this.updateUserForm.value.details,
        commune: this.updateUserForm.value.commune,
        city: this.updateUserForm.value.city,
        province: this.updateUserForm.value.province
      }
    }

    this.userService.updateUser(this.fromParent.id, this.user).then((data) => {
      this.activeModal.close();
      this.toastr.success('Update user successfully!', 'Success');
      console.log(data);
    }
    ).catch(err => {
      console.log(err);
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }
}
