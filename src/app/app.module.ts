import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { Child2Component } from './child2/child2.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective,
    Child2Component,
    CockpitComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
