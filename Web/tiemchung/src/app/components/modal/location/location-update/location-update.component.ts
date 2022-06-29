import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectedLocationService } from 'src/app/services/injected-location/injected-location.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.scss']
})
export class LocationUpdateComponent implements OnInit {
  @Input() fromParent;
  updateLocationForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    commune: new FormControl(''),
    province: new FormControl(''),
  })

  constructor(private injectedLocationService: InjectedLocationService, private activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.injectedLocationService.getInjectedLocationByID(this.fromParent.id).then(data => {
      this.updateLocationForm.patchValue({
        name: data.val().name,
        address: data.val().address,
        city: data.val().city,
        commune: data.val().commune,
        province: data.val().province,
      });
    }).catch(err => {
      console.log(err);
    });

    console.log(this.updateLocationForm.value);
  }

  onSave() {
    this.injectedLocationService.updateInjectedLocation(this.fromParent.id, this.updateLocationForm.value).then(data => {
      console.log(data);
      this.activeModal.close();
      this.toastr.success('Cập nhật điểm tiêm thành công!');
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
