import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'teqniqly-fx-layout-sample-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  showExtras$: Observable<boolean> = new Observable<boolean>();
  
  constructor(public mo: MediaObserver) { 
    this.showExtras$ = this.mo.asObservable().pipe(map(mc => {
      console.log(mc[0].mqAlias);
      return (mc[0].mqAlias === 'md' ||
      mc[0].mqAlias === 'lg' ||
      mc[0].mqAlias === 'xl');
    }));
  }

  ngOnInit() {
  }

}
