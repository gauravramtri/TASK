import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAc0SGkFq92IcqQqLN_Kec_PrzXPZ9iKZ8'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
