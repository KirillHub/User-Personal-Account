import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { AuthEffects } from "./state/auth.effects";
import { authReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selector";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer)
  ],
  declarations: [
    LoginComponent,
  ],
  exports: []

})

export class AuthModule { }
