import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { SRC } from '../../app.api';

@Injectable()
export class ConversorService {

  constructor(private http: Http) { }

}
