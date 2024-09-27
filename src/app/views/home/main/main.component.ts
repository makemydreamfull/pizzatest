import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {from, map, Observable, Subject, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
// import * as bootstrap from 'bootstrap'

// declare var bootstrap: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy, OnInit, AfterViewInit {
  //private observable: Observable<number>;
  private subject: Subject<number>

  constructor( public cartService: CartService) {
    this.subject = new Subject<number>()
    let count = 0
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setInterval(() => {
      this.subject.complete();
    }, 4000);

    //this.observable = from([1, 2, 3, 4, 5])
    // this.observable = new Observable((observer) => {
    //   let count = 0
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setInterval(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval)
    //       clearInterval(timeout1)
    //       clearInterval(timeout2)
    //     }
    //   }
    // })

  }
  private subscription: Subscription | null = null

  ngOnInit() {
    // const myModalAlternative = new bootstrap.Modal('#myModal', {})
    // myModalAlternative.show()

    this.subscription = this.subject.subscribe(
      {
        next: (param: number) => {
          console.log('subscriber 1:' + param);
        },
        error: (error: string) => {
          console.log('Error! ' + error);
        }
      }
    )
  }

  test() {

    this.subscription = this.subject
      .pipe(
        map((number) => {
          return 'Число:' + number
        })
      )
      .subscribe((param: string) => {
      console.log('subscriber 2:' + param)
    })
  }
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent
  ngAfterViewInit() {
    this.popupComponent.open()
    // this.modalService.open(this.popup, {})

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }


}
