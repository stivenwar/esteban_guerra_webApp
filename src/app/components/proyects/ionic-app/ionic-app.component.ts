import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ServiceServicehidenav} from "../../../service.servicehidenav";
import {AnimationController,Animation} from "@ionic/angular";

@Component({
  selector: 'app-ionic-app',
  templateUrl: './ionic-app.component.html',
  styleUrls: ['./ionic-app.component.scss']
})
export class IonicAppComponent implements OnInit, OnDestroy,AfterViewInit {

  @ViewChild('scrollingContainer') scrollingContainer: ElementRef | undefined;
  scrollContainer: any
  private currentPosition = 0;
  private scrollAmount = 1; // 1 pixel
  private interval: number
  public building : boolean
  constructor(public service: ServiceServicehidenav, private animationCtrl: AnimationController) {
    this.interval = 0
    this.building = false;
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.service.setNavBarHidden(true)


    })


  }

  ngAfterViewInit() {

    this.scrollContainer = this.scrollingContainer?.nativeElement

  }

  ngOnDestroy() {
    this.service.setNavBarHidden(false)
    clearInterval(this.interval)

  }


  build() {
    !this.building ? this.building = true:this.building = false;
  }
}
