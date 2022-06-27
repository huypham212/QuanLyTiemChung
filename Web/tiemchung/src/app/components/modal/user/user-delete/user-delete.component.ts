import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/users/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  @Input() fromParent;
  constructor(public activeModal: NgbActiveModal, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.userService.deleteUser(this.fromParent.id).then(data => {
      this.activeModal.close();
      this.toastr.success('User has been deleted');
    }
    ).catch(err => {
      console.log(err);
    })
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
