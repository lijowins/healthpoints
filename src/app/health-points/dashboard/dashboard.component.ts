import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'chart.js';
import { ProfileService } from 'src/app/services/profile.service';
import { DataService } from 'src/app/services/data.service';
declare var require: any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = ["http://www.kent-college.co.uk/slider/thrive/5-annabel-swimming.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/athlete-cycling-on-country-road-royalty-free-image-955084722-1532118648.jpg", "https://www.allibert-trekking.com/iconographie/25/PL1_trek-au-fitz-roy-et-torres-del-paine.jpg"]
  PieChart = [];
  BarChart = [];
  points = [];
  public trackables: any = null;
  data = [];
  legends = [];
  private moment = require('moment');
  
  constructor(config: NgbCarouselConfig, private profileService: ProfileService, private dataService: DataService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.getTrackables();
  }

  getTrackables() {

    this.profileService.getTrackablesByProfile(this.dataService.currentUser.ID).subscribe(res => {
      this.trackables = null;
      this.trackables = res.data;
      this.trackables.forEach((x, index) =>
        this.profileService.getLogsByTrackableId(x.ID).subscribe(result => {
          //this.data.push(res.data)
          this.points= [];
          this.legends= [];
          result.data.forEach(x => this.points.push(x.POINTS_EARNED));
          result.data.forEach(x => this.legends.push(this.moment(x.LOG_DATE, "YYYYMMDD").format('DD/MM/YYYY')));
          this.loadChart(index);
        }));
    });
  }

  loadChart(i: number) {
    this.PieChart.push(new Chart('pieChart' + i, {
      type: 'pie',
      data: {
        labels: this.legends,
        datasets: [{
          // label: '# of Votes',
          data: this.points,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },

      options: {
        title: {
          text: "Pie Chart",
          display: false

        },
        legend: {
          display: true,
          position: 'left'
        }
      }
    }));
    this.BarChart.push(new Chart('barChart' + i, {
      type: 'bar',
      data: {
        labels: this.legends,
        datasets: [{
          // label: '# of Votes',
          data: this.points,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255,99,132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false,
          position: 'right'
        }
      }
    }));
  }

}
