import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationCreateComponent } from 'src/app/components/modal/location/location-create/location-create.component';
import { LocationDeleteComponent } from 'src/app/components/modal/location/location-delete/location-delete.component';
import { LocationUpdateComponent } from 'src/app/components/modal/location/location-update/location-update.component';
import { InjectedLocationService } from './../../services/injected-location/injected-location.service';

@Component({
  selector: 'app-injected-location',
  templateUrl: './injected-location.component.html',
  styleUrls: ['./injected-location.component.scss']
})
export class InjectedLocationComponent implements OnInit {
  arrayData: any[];
  page = 1;
  pageSize = 5;

  constructor(private modalService: NgbModal, private activeRoute: ActivatedRoute, private injectedLocationService: InjectedLocationService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData = () => {
    this.arrayData = [];
    this.injectedLocationService.getAllInjectedLocation().then(data => {
      for (let item of Object.entries(data.val())) {
        this.arrayData.push(item);
      }
    });
  }

  createLocation = () => {
    const modalRef = this.modalService.open(LocationCreateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    }).then(() => {
      this.fetchData();
    });

    modalRef.closed.subscribe((res) => {
      console.log(res);
    });
  }

  updateLocation = () => {
    const modalRef = this.modalService.open(LocationUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });
  }

  deleteLocation = (id: string) => {
    const modalRef = this.modalService.open(LocationDeleteComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      id: id
    }

    modalRef.componentInstance.fromParent = data;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    }).then(() => {
      this.fetchData();
    });
  }

}
