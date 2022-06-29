import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { injectedHistoriesService } from 'src/app/services/injected-histories/injected-histories.service';
import { InjectedLocationService } from 'src/app/services/injected-location/injected-location.service';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { ToastrService } from 'ngx-toastr';
import { dateFormat } from 'src/app/utils/dateFormat';

@Component({
  selector: 'app-history-create',
  templateUrl: './history-create.component.html',
  styleUrls: ['./history-create.component.scss']
})
export class HistoryCreateComponent implements OnInit {
  @Input() fromParent;
  createHistoryForm = new FormGroup({
    vaccineName: new FormControl(''),
    batchNumber: new FormControl(''),
    injectedDate: new FormControl(''),
    injectedLocation: new FormControl(''),
  })
  injectedLocationData: any[] = []
  vaccineData: any[] = [];
  batchData: any[] = [];

  constructor(private injectedHistoryService: injectedHistoriesService, private activeModal: NgbActiveModal, private vaccineService: VaccineService, private injectedLocationService: InjectedLocationService, private toastr: ToastrService) { }

  ngOnInit(): void {

    //Call service to get vaccine data
    this.vaccineService.getAllVaccine().then((res) => {

      for (let item of Object.entries(res.val())) {
        this.vaccineData.push(item);
      }
    }).catch((err) => {
      console.log(err);
    });

    //Call service to get injected location data
    this.injectedLocationService.getAllInjectedLocation().then((res) => {

      for (let item of Object.entries(res.val())) {
        this.injectedLocationData.push(item[1]);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  //Get batch number by vaccine name
  onVaccineChange = () => {
    this.vaccineData.forEach((item) => {
      if (item[1].name === this.createHistoryForm.value.vaccineName) {
        for (const batchItem of Object.entries(item[1].batchs)) {
          this.batchData.push(batchItem);
        }
      }

      console.log(this.batchData)
    })
  }

  onSave = () => {
    let data = {
      vaccineName: this.createHistoryForm.value.vaccineName,
      batchNumber: this.createHistoryForm.value.batchNumber,
      injectedDate: dateFormat(this.createHistoryForm.value.injectedDate, 'dd/MM/yyyy'),
      injectedLocation: this.createHistoryForm.value.injectedLocation,
    }

    this.injectedHistoryService.createInjectedHistories(this.fromParent.uid, data).then(res => {

      this.vaccineData.forEach((item) => {
        if (item[1].name === this.createHistoryForm.value.vaccineName) {
          let vaccineID = item[0];

          this.batchData.forEach((batchItem) => {
            if (batchItem[0] === this.createHistoryForm.value.batchNumber) {
              let batchID = batchItem[0];

              let data = {
                amounts: batchItem[1].amounts - 1,
                dateIn: batchItem[1].dateIn,
                dateExp: batchItem[1].dateExp,
              }

              this.vaccineService.updateVaccineBatch(vaccineID, batchID, data).then(() => {
                this.createHistoryForm.reset();
                this.activeModal.close();
                this.toastr.success('Thêm mũi tiêm thành công!', 'Success');
              }).catch((err) => {
                this.toastr.error('Thêm mũi tiêm thất bại! \n' + err, 'Error');
              })
            }
          }
          )
        }
      })
    }).catch(err => {
      this.toastr.error('Thêm mũi tiêm thất bại! \n' + err, 'Error');
    });
  }

  closeModal = (sendData) => {
    this.activeModal.close(sendData);
  }

}
