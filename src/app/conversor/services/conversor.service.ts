import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { SRC } from '../../app.api';
import { Observable } from 'rxjs/Observable';
import { ConversaoResponse, Conversao } from '../models';

@Injectable()
export class ConversorService {

  constructor(private http: Http) { }

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?base=${conversao.moedaFrom}&symbols=${conversao.moedaTo}`;
  }
}
