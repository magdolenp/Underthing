import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { WorldComponent } from './content/world/world.component';
import { CalculatorsComponent } from './content/calculators/calculators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule, MatSelectModule,
  MatToolbarModule,
} from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MonstersComponent } from './content/monsters/monsters.component';
import { SpellsComponent } from './content/spells/spells.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { REDUCERS } from './shared/store/reducers';
import { EFFECTS } from './shared/store/effects';
import { DiceThrowerComponent } from './content/calculators/dice-thrower/dice-thrower.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorldComponent,
    CalculatorsComponent,
    DiceThrowerComponent,
    SideNavComponent,
    MonstersComponent,
    SpellsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(EFFECTS),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
