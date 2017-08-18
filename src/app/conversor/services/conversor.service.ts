import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SRC } from '../../app.api';
import { Observable } from 'rxjs/Observable';
import { ConversaoResponse, Conversao } from '../models';

@Injectable()
export class ConversorService {

  constructor(private http: Http) { }

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    const params = `?base=${conversao.moedaFrom}&symbols=${conversao.moedaTo}`;

    return this.http
    .get(`${SRC}` + params)
    .map(response => response.json() as ConversaoResponse)
    .catch(error => Observable.throw(error));

  }
}
