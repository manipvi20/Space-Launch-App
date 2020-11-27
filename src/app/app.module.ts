import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import localeBn from '@angular/common/locales/bn';
import localeBnExtra from '@angular/common/locales/extra/bn';
import { SpaceServices } from './core/services/space-services';


registerLocaleData(localeBn, 'bn', localeBnExtra);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-ssr' }),
    CoreModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SpaceServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
