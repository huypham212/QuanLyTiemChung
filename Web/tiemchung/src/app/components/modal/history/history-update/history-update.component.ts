import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { injectedHistoriesService } from 'src/app/services/injected-histories/injected-histories.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { dateFormat } from 'src/app/utils/dateFormat';
import { VaccineService } from 'src/app/services/vaccine/vaccine.service';
import { InjectedLocationService } from 'src/app/services/injected-location/injected-location.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history-update',
  templateUrl: './history-update.component.html',
  styleUrls: ['./history-update.component.scss']
})
export class HistoryUpdateComponent implements OnInit {
  @Input() fromParent;
  updateHistoryForm = new FormGroup({
    vaccineName: new FormControl(''),
    batchNumber: new FormControl(''),
    injectedDate: new FormControl(''),
    injectedLocation: new FormControl(''),
  })
  injectedHistoryData: any;
  injectedLocationData: any[] = []
  vaccineData: any[] = [];
  batchData: any[] = [];

  constructor(private datePipe: DatePipe, private injectedHistoryService: injectedHistoriesService, private activeModal: NgbActiveModal, private vaccineService: VaccineService, private injectedLocationService: InjectedLocationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //Call service to get injected history data
    this.injectedHistoryService.getInjectedHistoriesByHistoryID(this.fromParent.uid, this.fromParent.historiesId).then((res) => {

      var dateParts = res.val().injectedDate.split("/");
      // month is 0-based, that's why we need dataParts[1] - 1
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

      this.updateHistoryForm.patchValue({
        vaccineName: res.val().vaccineName,
        batchNumber: res.val().batchNumber,
        injectedDate: this.datePipe.transform(dateObject, 'yyyy-MM-dd'),
        injectedLocation: res.val().injectedLocation,
      });

      this.injectedHistoryData = res.val();

    }).catch((err) => {
      console.log(err);
    });

    //Call service to get vaccine data
    this.vaccineService.getAllVaccine().then((res) => {

      for (let item of Object.entries(res.val())) {
        this.vaccineData.push(item);
      }

      this.vaccineData.forEach((item) => {
        if (item[1].name === this.updateHistoryForm.value.vaccineName) {
          for (const batchItem of Object.entries(item[1].batchs)) {
            this.batchData.push(batchItem);
          }
        }
      })
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
      if (item[1].name === this.updateHistoryForm.value.vaccineName) {
        for (const batchItem of Object.entries(item[1].batchs)) {
          this.batchData.push(batchItem);
        }
      }
    })
  }

  onSave = () => {
    //Check if there is changed in batch number
    if (this.injectedHistoryData.batchNumber === this.updateHistoryForm.value.batchNumber) {
      let data = {
        vaccineName: this.updateHistoryForm.value.vaccineName,
        batchNumber: this.updateHistoryForm.value.batchNumber,
        injectedDate: dateFormat(this.updateHistoryForm.value.injectedDate, 'dd/MM/yyyy'),
        injectedLocation: this.updateHistoryForm.value.injectedLocation,
      }

      this.injectedHistoryService.updateInjectedHistories(this.fromParent.uid, this.fromParent.historiesId, data).then(res => {
        this.activeModal.close();
        this.updateHistoryForm.reset();
        this.toastr.success('Cập nhật thông tin mũi tiêm thành công!', 'Success');
      }).catch(err => {
        this.toastr.error('Cập nhật thông tin mũi tiêm thất bại! \n' + err, 'Error');
      });
    }
    else {
      let data = {
        vaccineName: this.updateHistoryForm.value.vaccineName,
        batchNumber: this.updateHistoryForm.value.batchNumber,
        injectedDate: dateFormat(this.updateHistoryForm.value.injectedDate, 'dd/MM/yyyy'),
        injectedLocation: this.updateHistoryForm.value.injectedLocation,
      }

      this.injectedHistoryService.updateInjectedHistories(this.fromParent.uid, this.fromParent.historiesId, data).then(res => {

        //Update amounts vaccine in batch with old history data
        this.vaccineData.forEach((item) => {
          if (item[1].name === this.updateHistoryForm.value.vaccineName) {
            let vaccineID = item[0];

            this.batchData.forEach((batchItem) => {
              if (batchItem[0] === this.injectedHistoryData.batchNumber) {
                let batchID = batchItem[0];

                let data = {
                  amounts: batchItem[1].amounts + 1,
                  dateIn: batchItem[1].dateIn,
                  dateExp: batchItem[1].dateExp,
                }

                this.vaccineService.updateVaccineBatch(vaccineID, batchID, data).then(() => {
                  // this.updateHistoryForm.reset();
                  // this.toastr.success('Cập nhật số lượng vaccine mới thành công!', 'Success');
                }).catch((err) => {
                  this.toastr.error('Cập nhật số lượng vaccine cũ thất bại! \n' + err, 'Error');
                })
              }
            }
            )
          }
        })

        //Update amounts vaccine in batch with new history data
        this.vaccineData.forEach((item) => {
          if (item[1].name === this.updateHistoryForm.value.vaccineName) {
            let vaccineID = item[0];

            this.batchData.forEach((batchItem) => {
              if (batchItem[0] === this.updateHistoryForm.value.batchNumber) {
                let batchID = batchItem[0];

                let data = {
                  amounts: batchItem[1].amounts - 1,
                  dateIn: batchItem[1].dateIn,
                  dateExp: batchItem[1].dateExp,
                }

                this.vaccineService.updateVaccineBatch(vaccineID, batchID, data).then(() => {
                  // this.updateHistoryForm.reset();
                  // this.toastr.success('Cập nhật số lượng vaccine mới thành công!', 'Success');
                }).catch((err) => {
                  this.toastr.error('Cập nhật số lượng vaccine mới thất bại! \n' + err, 'Error');
                })
              }
            }
            )
          }
        })
        this.updateHistoryForm.reset();
        this.activeModal.close();
        this.toastr.success('Cập nhật thông tin mũi tiêm thành công!', 'Success');
      }).catch(err => {
        this.toastr.error('Cập nhật thông tin mũi tiêm thất bại! \n' + err, 'Error');
      });
    }



  }

  closeModal = (sendData) => {
    this.activeModal.close(sendData)
  }

}
