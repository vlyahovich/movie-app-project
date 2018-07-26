
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from './shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    SharedMaterialModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }

}
