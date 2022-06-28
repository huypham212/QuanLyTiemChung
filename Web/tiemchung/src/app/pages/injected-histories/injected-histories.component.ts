import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryCreateComponent } from 'src/app/components/modal/history/history-create/history-create.component';
import { HistoryUpdateComponent } from 'src/app/components/modal/history/history-update/history-update.component';
import { UserService } from 'src/app/services/users/user.service';
import { injectedHistoriesService } from 'src/app/services/injected-histories/injected-histories.service';

@Component({
  selector: 'app-injected-histories',
  templateUrl: './injected-histories.component.html',
  styleUrls: ['./injected-histories.component.scss']
})
export class InjectedHistoriesComponent implements OnInit {
  userName: string;
  injectedHistoriesData: any[] = [];

  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal, private userService: UserService, private injectedHistoriesService: injectedHistoriesService) { }

  ngOnInit(): void {
    this.fetchData()

    console.log(this.injectedHistoriesData)
  }

  fetchData = () => {
    this.injectedHistoriesData = [];

    this.userService.getUserByUID(this.activeRoute.snapshot.params['id']).then((res) => {
      this.userName = res.val().name;
    }).catch((err) => {
      console.log(err);
    })

    this.injectedHistoriesService.getInjectedHistoriesByUID(this.activeRoute.snapshot.params['id']).then((res) => {

      for (let item of Object.entries(res.val())) {
        this.injectedHistoriesData.push(item);
      }
      console.log(this.injectedHistoriesData);
    }).catch((err) => {
      console.log(err);
    });
  }

  createHistories = () => {
    const modalRef = this.modalService.open(HistoryCreateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      uid: this.activeRoute.snapshot.params['id'],
    }

    modalRef.componentInstance.fromParent = data;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => { }).then(() => {
      this.fetchData();
    });
  }

  updateHistories = (id: string) => {
    const modalRef = this.modalService.open(HistoryUpdateComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true, scrollable: true, backdrop: true });

    let data = {
      uid: this.activeRoute.snapshot.params['id'],
      historiesId: id,
    };

    modalRef.componentInstance.fromParent = data;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => { }).then(() => {
      this.fetchData();
    });
  }

}
