import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileUrl: string = "http://3.14.112.15/profile";
  private trackableUrl: string = "http://3.14.112.15/trackable";
  private logUrl: string = "http://3.14.112.15/log";
  
  constructor(private http: HttpClient) { }

  getAllProfiles() {
    return this.http.get<any>(this.profileUrl);
  }

  getAllTrackables(){
    return this.http.get<any>(this.trackableUrl);
  }

  getTrackablesByProfile(profileId: string){
    return this.http.get<any>(`${this.trackableUrl}/${profileId}`);
  }

  getAllLogs(){
    return this.http.get<any>(this.logUrl);
  }

  getLogsByTrackableId(trackableId: string){
    return this.http.get<any>(`${this.logUrl}/${trackableId}`);
  }
  
  registerProfile(request: any){
    return this.http.post<any>(this.profileUrl, request);
  }
}
