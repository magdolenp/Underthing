import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { WorldComponent } from './content/world/world.component';
import { CalculatorsComponent } from './content/calculators/calculators.component';
import { TestingComponent } from './content/testing/testing.component';
import { AboutComponent } from './content/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    HomeComponent,
    WorldComponent,
    CalculatorsComponent,
    TestingComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
