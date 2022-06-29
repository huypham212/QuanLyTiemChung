import { Component, Input, OnInit } from '@angular/core';
import { InjectedLocationService } from 'src/app/services/injected-location/injected-location.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location-delete',
  templateUrl: './location-delete.component.html',
  styleUrls: ['./location-delete.component.scss']
})
export class LocationDeleteComponent implements OnInit {
  @Input() fromParent;
  constructor(private injectedLocationService: InjectedLocationService, private activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.injectedLocationService.deleteInjectedLocation(this.fromParent.id)
      .then(data => {
        console.log(data);
        this.activeModal.close();
        this.toastr.success('Xóa điểm tiêm thành công!');
      }).catch(err => {
        console.log(err);
      });
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
