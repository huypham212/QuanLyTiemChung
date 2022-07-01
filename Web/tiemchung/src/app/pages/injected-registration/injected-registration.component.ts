import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InjectedRegistrationService } from 'src/app/services/injected-registration/injected-registration';
import { RegistrationUpdateComponent } from 'src/app/components/modal/registration/registration-update/registration-update.component';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-injected-registration',
  templateUrl: './injected-registration.component.html',
  styleUrls: ['./injected-registration.component.scss']
})
export class InjectedRegistrationComponent implements OnInit {
  userName: string;
  data: any[] = [];

  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private modalService: NgbModal, private registrationService: InjectedRegistrationService) { }

  ngOnInit(): void {
    this.fetchData()
    console.log(this.data)
  }

  fetchData = () => {
    this.data = [];

    this.userService.getUserByUID(this.activeRoute.snapshot.params['id']).then((res) => {
      this.userName = res.val().name;
    }).catch((err) => {
      console.log(err);
    })

    this.registrationService.getAllInjectedRegistrationByUID(this.activeRoute.snapshot.params['id']).then(data => {
      for (let item of Object.entries(data.val())) {
        this.data.push(item);
      }
    })
  }

  updateModal = (id: string) => {
    const modalRef = this.modalService.open(RegistrationUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });

    let data = {
      uid: this.activeRoute.snapshot.params['id'],
      registrationID: id,
    }

    modalRef.componentInstance.fromParent = data;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });

    modalRef.closed.subscribe(() => {
      this.fetchData()
    })

  }
}
