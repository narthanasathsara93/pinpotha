// b2.service.ts
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class B2Service {
  private apiUrl = 'http://localhost:3000/files';

  constructor(private http: HttpClient) {}

  async listFiles() {
    return await firstValueFrom(this.http.get<any[]>(this.apiUrl));
  }

  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiUrl + '/upload', formData).toPromise();
  }
}
