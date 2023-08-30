import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceServicehidenav} from "../../../service.servicehidenav";
import {UsersServiceService} from "../../../services/users-service.service";
import {UserInterface} from "../../../interfaces/UserInterface";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-angular-app-users',
  templateUrl: './angular-app-users.component.html',
  styleUrls: ['./angular-app-users.component.scss']
})
export class AngularAppUsersComponent implements OnInit, OnDestroy {
  usersComents : UserInterface[]
  usersComentsScroll : UserInterface[]
  load: boolean
  n: number
  constructor(private service: ServiceServicehidenav, private  serviceUsers: UsersServiceService) {
    this.usersComents = []
    this.load = true
    this.usersComentsScroll = []
    this.n = 0
  }

  ngOnInit(): void {

    setTimeout(()=> {
      this.service.setNavBarHidden(true)

    })
    this.generateItems()



  }
  generateItems() {

    this.serviceUsers.getUsersTypicodeApi().subscribe(users => {
      console.log(users);
      this.usersComents = users
      this.load = false
      for (let i = 0; i < 20; i++) {
        this.usersComentsScroll.push(this.usersComents[i+this.n]);
      }
      this.n+=20

    })

    console.log(this.usersComentsScroll)
  }
  /*TERMINAR ION SCROLLL */
  ngOnDestroy() {
    this.service.setNavBarHidden(false)

  }

  onIonInfinite(evt: any) {

    setTimeout(() => {

      (evt as InfiniteScrollCustomEvent).target.complete().then(r => {
        this.generateItems()
      });
    }, 1000);
  }
}
