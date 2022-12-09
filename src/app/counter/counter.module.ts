import { FormsModule } from '@angular/forms';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { CounterRoutingModule } from './counter-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/counter.selectors';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CounterRoutingModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ],
  declarations: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
  ],
  exports: [],
})

export class CounterModule { }
