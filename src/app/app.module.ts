import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import { RedpandaComponent } from './redpanda/redpanda.component';
import { HarpsealComponent } from './harpseal/harpseal.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildddComponent } from './childdd/childdd.component';
import { HeaderComponent } from './header/header.component';
import { QueryComponent } from './query/query.component';
import { Query2Component } from './query2/query2.component';
import { Query3Component } from './query3/query3.component';
import { PlacesComponent } from './places/places.component';
import { EventComponent } from './event/event.component';
import { CustomDirective } from './custom.directive';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';

import { EmpPipe } from './emp.pipe';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ExampleComponent,
    RedpandaComponent,
    HarpsealComponent,
    ChildComponent,
    ParentComponent,
    ChildddComponent,
    HeaderComponent,
    QueryComponent,
    Query2Component,
    Query3Component,
    PlacesComponent,
    EventComponent,
    CustomDirective,
    TestComponent,
    PipesComponent,
    
    EmpPipe,
         DataComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
