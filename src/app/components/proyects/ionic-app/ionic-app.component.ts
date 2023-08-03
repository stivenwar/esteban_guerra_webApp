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
  private starStop : boolean
  constructor(public service: ServiceServicehidenav, private animationCtrl: AnimationController) {
    this.interval = 0
    this.starStop = true
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

  startScroll() {

    if (this.starStop){
      this.starStop = false
      // @ts-ignore
      this.interval = setInterval(()=> {
        this.currentPosition += this.scrollAmount;
        this.scrollContainer.style.transform = `translateY(-${this.currentPosition}px)`;

        if (this.currentPosition >= this.scrollContainer.clientHeight) {
          this.currentPosition = 0;
          this.scrollContainer.style.transform = `translateY(0)`;
        }

      },10)
    }
  }
  pauseScroll(){
    clearInterval(this.interval)
    this.starStop =true;
  }


  protected readonly event = event;

  fileChooser(target: EventTarget | null) {
    console.log(target)
  }

  importFile($event: Event) {
    if ($event !== null){
      // @ts-ignore
      if ($event.target.files.length == 0) {
        console.log("No file selected!");
        return
      }
      // @ts-ignore
      let file: File = $event.target.files[0];
      console.log(file)
      // after here 'file' can be accessed and used for further process
    }

  }

}
