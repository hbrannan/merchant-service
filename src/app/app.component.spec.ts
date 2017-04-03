import { TestBed, async } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MerchantFormComponent } from './components/merchant-form.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
