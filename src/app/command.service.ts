import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Command } from './shared/command';

import { catchError, map, tap, filter } from 'rxjs/operators';
import { concat } from 'rxjs/operators/concat';
import { from } from 'rxjs/observable/from'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import * as Rx from 'rxjs'

@Injectable()
export class CommandService implements OnInit {

  private api_url: string = "./assets/data.json";

  private commands: Command[];
  private filteredCommands: Command[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  /** GET commands from the api */
  getCommands(): Observable<Command[]> {
    return this.http.get<Command[]>(this.api_url)
      .pipe(
        catchError(this.handleError('getCommands', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
