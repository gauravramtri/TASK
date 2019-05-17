import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilterPipe }from './pipes';
import {AgmCoreModule} from '@agm/core';


import { AppRoutingModule } from './app-routing.module';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';





@NgModule({
  declarations: [
    
    AppComponent, FilterPipe
    
    
    
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAc0SGkFq92IcqQqLN_Kec_PrzXPZ9iKZ8'
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
