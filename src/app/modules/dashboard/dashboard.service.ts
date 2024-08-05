import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { AverageAgeByBloodType, Donator, ImcAverage, ObesityPercent, PossibleDonors } from 'src/app/core/@types/donator';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:3001';

  constructor(private readonly http: HttpClient) { }

  getData() {
    return this.http.get<Donator[]>(`${this.apiUrl}/donator`);
  }

  getDataImc() {
    return this.http.get<ImcAverage[]>(`${this.apiUrl}/donator/imc-average`);
  }
  
  getObesityPercent() {
    return this.http.get<ObesityPercent[]>(`${this.apiUrl}/donator/obesity-percentage`);
  }
  
  getAverageAgeByBloodtype() {
    return this.http.get<AverageAgeByBloodType[]>(`${this.apiUrl}/donator/average-age-by-blood-type`);
  }

  getPossibleDonors() {
    return this.http.get<PossibleDonors[]>(`${this.apiUrl}/donator/possible-donors`);
  }
}
