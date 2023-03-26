import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafeHtmlPipeModule } from './pipes/safe-html.pipe';

@NgModule({
  imports: [CommonModule, SafeHtmlPipeModule],
  exports: [SafeHtmlPipeModule],
})
export class SharedModule {}
