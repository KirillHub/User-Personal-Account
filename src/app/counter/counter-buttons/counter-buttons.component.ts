
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { decrement, increment, reset } from '../state/counter.actions';
import { TCounterState } from '../state/counter.state';
import { TAppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {

  constructor(private store: Store<TAppState>){}

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
