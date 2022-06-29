import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InjectedRegistrationService } from 'src/app/services/injected-registration/injected-registration';
import { RegistrationUpdateComponent } from 'src/app/components/modal/registration/registration-update/registration-update.component';

@Component({
  selector: 'app-injected-registration',
  templateUrl: './injected-registration.component.html',
  styleUrls: ['./injected-registration.component.scss']
})
export class InjectedRegistrationComponent implements OnInit {
  userName: string;

  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal, private registrationService: InjectedRegistrationService) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
  }

  updateModal = () => {
    const modalRef = this.modalService.open(RegistrationUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });


  }
}
