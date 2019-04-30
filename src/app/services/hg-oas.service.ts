import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HgOasService {

  private hgUrl: string = "http://services-lb-testaws.healthgrades.com/svc/v3_0/oas/api/Appointments/";
  private hgLocalUrl: string = 'http://localhost:64416/api/Appointments/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) {
    this.hgUrl = this.hgLocalUrl;
  }

  getTimeSlots(pwid:string, startDate:string, endDate:string) {
    return this.http.get<any>(`${this.hgUrl}GetTimeSlots?pwid=${pwid}&startDate=${startDate}&endDate=${endDate}`);
  }

  holdTimeSlot(request: any){
    return this.http.post<any>(`${this.hgUrl}HoldTimeSlot`, request, this.options);
  }
}
