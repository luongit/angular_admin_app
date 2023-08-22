import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public endpoint: string | null = null;
  public storageToken: string = 'cbv_btk_app_login_token_12134445dgwyyweywgwwehwie';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${api}${this.endpoint}`);
  }

  post(data: any) {
    return this.http.post(`${api}${this.endpoint}`, data);
  }

  put(data: any) {
    return this.http.put(`${api}${this.endpoint}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${api}${this.endpoint}/${id}`);
  }

  getUserInStorage() {
    let jsonString: any = sessionStorage.getItem(this.storageToken);

    if (jsonString) {
      return JSON.parse(jsonString);
    } else {
      return null;
    }
  }
}
