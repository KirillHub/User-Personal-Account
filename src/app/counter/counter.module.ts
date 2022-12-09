import { FormsModule } from '@angular/forms';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { CounterRoutingModule } from './counter-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CounterRoutingModule,
    // StoreModule.forFeature('counter', counterReducer)
  ],
  declarations: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
  ],
  exports: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
    CustomCounterInputComponent
  ],
})

export class CounterModule { }
