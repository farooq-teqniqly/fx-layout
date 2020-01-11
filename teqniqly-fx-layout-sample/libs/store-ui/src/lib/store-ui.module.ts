import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [SampleComponent],
  exports: [SampleComponent]
})
export class StoreUiModule {}
