import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  @Input() fromParent;
  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.userService.deleteUser(this.fromParent.id).then(data => {
      this.activeModal.close();
    }
    ).catch(err => {
      console.log(err);
    })
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
