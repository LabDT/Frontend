import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }

  private constructUrl(endpoint: string) {
    return `${environment.backendUrl}/${endpoint}`;
  }

  /** Delete an entity by id at the endpoint */
  delete(
    endpoint: string,
    id: number,
  ): Observable<any> {
    let params = new HttpParams().set('id', id)
    return this.http.delete(this.constructUrl(endpoint), )
  }

  /** Get a list of entities */
  get(
    endpoint: string,
  ): Observable<any> {
    return this.http.get(this.constructUrl(endpoint));
  }
}
