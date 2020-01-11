import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreUiModule } from '@teqniqly-fx-layout-sample/store-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
