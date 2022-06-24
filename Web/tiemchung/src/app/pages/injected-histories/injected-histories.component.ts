import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryCreateComponent } from 'src/app/components/modal/history/history-create/history-create.component';
import { HistoryUpdateComponent } from 'src/app/components/modal/history/history-update/history-update.component';

@Component({
  selector: 'app-injected-histories',
  templateUrl: './injected-histories.component.html',
  styleUrls: ['./injected-histories.component.scss']
})
export class InjectedHistoriesComponent implements OnInit {
  userName: string;

  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params['id']);
  }

  createHistories = () => {
    const modalRef = this.modalService.open(HistoryCreateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });
  }

  updateHistories = () => {
    const modalRef = this.modalService.open(HistoryUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: false });
  }

}
