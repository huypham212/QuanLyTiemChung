import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { injectedHistoriesService } from 'src/app/services/injected-histories/injected-histories.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-history-update',
  templateUrl: './history-update.component.html',
  styleUrls: ['./history-update.component.scss']
})
export class HistoryUpdateComponent implements OnInit {
  @Input() fromParent;
  updateHistoryForm = new FormGroup({
    vaccineName: new FormControl('VACCINE COVID-19 AstraZeneca'),
    batchNumber: new FormControl('AST001'),
    injectedDate: new FormControl('12/11/2021'),
    injectedLocation: new FormControl('TYT xã Vĩnh Thạnh'),
  })

  constructor(private injectedHistoryService: injectedHistoriesService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave = () => {
    this.injectedHistoryService.updateInjectedHistories(this.fromParent.uid, this.updateHistoryForm.value).then(data => {
      console.log(data);
      this.activeModal.close();
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal = (sendData) => {
    console.log('close');
  }

}
