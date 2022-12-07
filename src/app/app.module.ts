import { CounterModule } from './components/counter/counter.module';
import { counterReducer } from './components/counter/state/counter.reducer';
import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CounterModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		StoreModule.forRoot({ counter: counterReducer }, {}),
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
	],
	// schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
