import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { Conversao, ConversaoResponse } from './models';


@NgModule({
  imports: [
    CommonModule,
    Http
  ],
  declarations: [ConversorComponent],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService]
})
export class ConversorModule { }
