import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserUpdateComponent } from 'src/app/components/modal/user/user-update/user-update.component';
import { UserDeleteComponent } from 'src/app/components/modal/user/user-delete/user-delete.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  index: number = 0;
  page = 1;
  pageSize = 5;
  arrayData = [];
  rawData: any;
  closeResult: string;
  constructor(private userService: UserService, private modalService: NgbModal, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData = () => {
    this.arrayData = [];
    this.userService.getAllUser().then(data => {
      this.rawData = data.val();
      for (let item of Object.entries(this.rawData)) {
        this.arrayData.push(item);
      }
    })
  }

  updateUser = (id: string) => {
    const updateModalRef = this.modalService.open(UserUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });

    let data = {
      id: id,
    }

    updateModalRef.componentInstance.fromParent = data;
    updateModalRef.result.then((res) => {
      console.log(res)
    }, (reason) => { })

    updateModalRef.closed.subscribe((result) => {
      this.fetchData();
    });
  }

  deleteUser = (id: string) => {
    const deleteModalRef = this.modalService.open(UserDeleteComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });

    let data = {
      id: id,
    }

    deleteModalRef.componentInstance.fromParent = data;
    deleteModalRef.result.then((res) => {
      console.log(res)
    }, (reason) => { })

    deleteModalRef.closed.subscribe((result) => {

      this.fetchData();
    });
  }

  histories(id: string) {
    this.router.navigate(['/histories', id]);
  }

  registration(id: string) {
    this.router.navigate(['/registration', id]);
  }

}
