import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment as env } from './../../../environments/environment';
import { IInventory } from 'src/app/models/IInventory';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(public http: HttpClient) { }

  public list(): Observable<IInventory[]> {
    return this.http.get<IInventory[]>(`${env.apiUrl}/inventory`)
      .pipe(tap(prod => prod))
  }
  public get(id: number): Observable<IInventory> {
    return this.http.get<IInventory>(`${env.apiUrl}/inventory/${id}`)
      .pipe(tap(prod => prod))
  }
  public post(prod: IInventory): Observable<IInventory[]> {
    return this.http.post<IInventory[]>(`${env.apiUrl}/inventory/`, prod)
      .pipe(tap(prod => prod))
  }
  public put(prod: IInventory): Observable<IInventory[]> {
    return this.http.put<IInventory[]>(`${env.apiUrl}/inventory/${prod.id}`, prod)
      .pipe(tap(prod => prod))
  }
  public delete(id: number): Observable<IInventory[]> {
    return this.http.delete<IInventory[]>(`${env.apiUrl}/inventory/${id}`)
      .pipe(tap(prod => prod))
  }
}
