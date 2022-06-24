import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { injectedHistoriesService } from 'src/app/services/injected-histories/injected-histories.service';

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

  constructor(private injectedHistoryService: injectedHistoriesService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSave = () => {
    this.injectedHistoryService.createInjectedHistories(this.fromParent.uid, this.createHistoryForm.value).then(data => {
      console.log(data);
      this.createHistoryForm.reset();
      this.activeModal.close();
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal = (sendData) => { }

}
