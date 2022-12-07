import { COUNTER_KEY } from './../state/counter.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { selectTextContent } from '../state/counter.selectors';
import { setCounter, setTextInfo } from '../state/counter.actions';
import { TCounter } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  getTextContent$?: Observable<string>;
  value: string | number = '';
  customTextInfo: string = 'Here is changing text';

  constructor(private store: Store<{COUNTER_KEY: TCounter}>) { }

  ngOnInit(): void {
    this.getTextContent$ = this.store.select(selectTextContent)
  }

  customCounterValue() {
    this.store.dispatch(setCounter({ count: +this.value }))
    this.value = '';
  }

  onChangeCustomTextInfo() {
    console.log('ee');
    this.store.dispatch(setTextInfo({ text: this.customTextInfo }))
  }

}
