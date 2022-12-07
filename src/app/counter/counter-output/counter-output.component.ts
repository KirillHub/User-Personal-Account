import { selectCounter } from '../state/counter.selectors';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { TCounterState } from '../state/counter.state';
import { TAppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})

export class CounterOutputComponent implements OnInit {

  counter$?: Observable<number>;
  @Input() cannotDecreaseCount$ = this.counter$?.pipe(
    map(count => count <= 0)
  );

  constructor(
    private store: Store<TAppState>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(selectCounter)
  }
}
