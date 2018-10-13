import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: TaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
