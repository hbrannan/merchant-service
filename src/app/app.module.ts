import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MerchantFormComponent } from './components/merchant-form.component'

import { AppComponent } from './app.component';
import { MerchantService } from './merchant.service';

@NgModule({
  declarations: [
    AppComponent,
    MerchantFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'types',
        component: AppComponent
      }
    ])
  ],
  providers: [MerchantService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
