import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }

  /** Asks the endpoint for a model of the data */
  model(
    endpoint: string,
  ): Observable<any> {
    return this.http.get(`${environment.backendUrl}/${endpoint}/model`);
  }

  /** Create an entity at the endpoint */
  create(
    endpoint: string,
    entity: Object,
  ): Observable<any> {
    return this.http.put(`${environment.backendUrl}/${endpoint}`, entity);
  }

  /** Get a list of entities */
  read(
    endpoint: string,
  ): Observable<any> {
    return this.http.get(`${environment.backendUrl}/${endpoint}`);
  }

  /** Update an entity at the endpoint */
  update(
    endpoint: string,
    entity: Object,
  ): Observable<any> {
    return this.http.patch(`${environment.backendUrl}/${endpoint}`, entity);
  }

  /** Delete an entity by id at the endpoint */
  delete(
    endpoint: string,
    id: number,
  ): Observable<any> {
    let params = new HttpParams().set('id', id)
    return this.http.delete(`${environment.backendUrl}/${endpoint}`);
  }
}
