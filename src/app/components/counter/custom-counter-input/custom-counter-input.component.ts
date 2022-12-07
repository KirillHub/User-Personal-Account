
import { Observable } from 'rxjs';
import { selectTextContent } from './../state/counter.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TCounter } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})

export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  getTextInfo$?: Observable<string>;

  constructor(private store: Store<{ counter: TCounter }>) { }

  ngOnInit(): void {
    this.getTextInfo$ = this.store.select(selectTextContent);
  }

  onAdd() {
    // this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeChannelName() {
    // this.store.dispatch(changeChannelName());
  }
}
