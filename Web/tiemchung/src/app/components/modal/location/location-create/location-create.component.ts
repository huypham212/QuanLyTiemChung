import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InjectedLocationService } from 'src/app/services/injected-location/injected-location.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {

  createLocationForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    commune: new FormControl(''),
    province: new FormControl(''),
  })

  constructor(private injectedLocationService: InjectedLocationService, private activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.injectedLocationService.createInjectedLocation(this.createLocationForm.value).then(data => {
      console.log(data);
      this.createLocationForm.reset();
      this.activeModal.close();
      this.toastr.success('Tạo điểm tiêm mới thành công!');
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
