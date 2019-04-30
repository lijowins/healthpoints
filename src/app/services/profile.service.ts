import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileUrl: string = "http://3.14.112.15/profile";
  constructor(private http: HttpClient) { }

  getAllProfiles() {
    return this.http.get<any>(this.profileUrl);
  }
}
