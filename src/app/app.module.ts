import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipe }from './pipes';
import {AgmCoreModule} from '@agm/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
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
