import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private server = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  download(fileName: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/file/download/${fileName}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
    });
  }
}
