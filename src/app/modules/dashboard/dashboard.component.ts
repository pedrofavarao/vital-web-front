import { Component } from '@angular/core';
import type { AverageAgeByBloodType, Donator, ImcAverage, ObesityPercent, PossibleDonors } from 'src/app/core/@types/donator';
import { mock } from 'src/app/data/mock';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: Donator[] = [];
  dataCopy: Donator[] = [];

  dataState: { [key: string]: number } = {};
  dataImcAverage: ImcAverage[] = [];
  dataObesityPercent: ObesityPercent[] = [];
  dataAverageAgeByBloodType: AverageAgeByBloodType[] = [];
  dataPossibleDonors: PossibleDonors[] = [];

  constructor(private readonly dashboardService: DashboardService) { }

  ngOnInit() {
    // this.data = mock;
    this.getData();
  }

  getData() {
    this.dashboardService.getData().subscribe(data => {
      this.data = data;
      this.dataCopy = this.data;

      this.createStateCounterTable(this.data );
    });

    this.dashboardService.getDataImc().subscribe(data => {
      const newDta = data.sort((a,b) => {
        const valuea = +a.ageRange.split('-')[0].trim();
        const valueb = +b.ageRange.split('-')[0].trim();

        if(valuea > valueb) return 1;
        if(valuea < valueb) return -1;
        return 0;
      })

      this.dataImcAverage = newDta;
    });

    this.dashboardService.getObesityPercent().subscribe(data => {
      this.dataObesityPercent = data;
    })

    this.dashboardService.getAverageAgeByBloodtype().subscribe(data => {
      this.dataAverageAgeByBloodType = data;
    })

    this.dashboardService.getPossibleDonors().subscribe(data => {
      this.dataPossibleDonors = data;
    });
  }

  createStateCounterTable(data: Donator[]) {
    // instancio chave estado com valor 0 com base na lista de candidatos
    this.data.map((donator) => (this.dataState[donator.address.state] = 0));

    // realiza somatoria de canditados em cada estado
    this.data.map((donator) => this.dataState[donator.address.state]++);
  }
}
