import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, take, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Grupo } from '../models/7Db/grupo';
import { RetGrupo } from '../models/2Ws/ret-grupo';
import { RetError } from 'ngx-sp-infra';
import { RetGrupos } from '../models/2Ws/ret-grupos';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  private readonly _BASE_URL: string = `${ environment.SpEst2InfraGrupoWS }/InfraGrupo`

  constructor( private httpClient: HttpClient ) {
    this._BASE_URL = !environment.production
      ? this._BASE_URL
      : `${ environment.SpEst2InfraGrupoWS }/InfraGrupo`;
  }
  
  // Method: getGruposList
  getGruposList(search: string): Observable<RetGrupos> {

    const params = new HttpParams()
      .set('search', search);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    
    const url = `${ this._BASE_URL }/GetGruposList`

    return this.httpClient
      .get<RetGrupos>(url, { 'params': params, 'headers': headers })
        .pipe(
          take(1),
          tap(response => {
            
            if (response.Error) {
              throw Error(response.ErrorMessage);
            }
            
          })
        );

  }

  // Method: getGrupo
  getGrupo(grupoID: number): Observable<RetGrupo> {

    const params = new HttpParams()
      .set('id', grupoID);
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    
    const url = `${this._BASE_URL}/Get`;

    return this.httpClient
      .get<RetGrupo>(url, { 'params': params, 'headers': headers })
        .pipe(
          take(1),
          tap(response => {

            if (response.Error) {
              throw Error(response.ErrorMessage); 
            }

          })
        );
  }

  // Method: createGrupo
  createGrupo(grupo: Grupo): Observable<RetGrupo> {
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    const url = `${ this._BASE_URL }/Create`;

    return this.httpClient
      .post<RetGrupo>(url, grupo, { 'headers': headers })
        .pipe(
          take(1),
          tap(response => {

            if (response.Error) {
              throw Error(response.ErrorMessage);
            }

          })
        )
  }

  // Method: updateGrupo
  updateGrupo(grupo: Grupo): Observable<RetGrupo> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    const url = `${ this._BASE_URL }/Update`;

    return this.httpClient
      .post<RetGrupo>(url, grupo, { 'headers': headers })
        .pipe(
          take(1),
          tap(response => {

            if (response.Error) {
              throw Error(response.ErrorMessage);
            }

          })
        )
  }

  // Method: deleteGrupo
  deleteGrupo(grupoID: number): Observable<RetError> {

    const params = new HttpParams()
      .set('id', grupoID);
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

    const url = `${ this._BASE_URL }/Delete`;

    return this.httpClient
      .post<RetError>(url, null, { 'params': params, 'headers': headers })
        .pipe(
          take(1),
          tap(response => {
            if (response.Error) {
              throw Error(response.ErrorMessage);
            }
            
          })
        )
  }

}
