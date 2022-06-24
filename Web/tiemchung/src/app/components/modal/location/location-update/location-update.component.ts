import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectedLocationService } from 'src/app/services/injected-location/injected-location.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.scss']
})
export class LocationUpdateComponent implements OnInit {
  @Input() fromParent;
  updateLocationForm = new FormGroup({
    name: new FormControl('TYT xã Vĩnh Thạnh'),
    address: new FormControl('Phú Vinh'),
    city: new FormControl('Nha Trang'),
    commune: new FormControl('xã Vĩnh Thạnh'),
    province: new FormControl('Khánh Hòa'),
  })

  constructor(private injectedLocationService: InjectedLocationService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave() {
    this.injectedLocationService.updateInjectedLocation(this.fromParent.id, this.updateLocationForm.value).then(data => {
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
