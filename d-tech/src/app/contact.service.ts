import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts()
  {
    let url = 'http://localhost:3000/api/contact-us'
    return this.http.get(url);
  }
}
