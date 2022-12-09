import { FormsModule } from '@angular/forms';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterRoutingModule } from './counter-routing.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CounterRoutingModule
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
    CounterOutputComponent
  ],
})

export class CounterModule {

}
