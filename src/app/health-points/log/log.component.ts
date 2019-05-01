import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  id: string = "";
  trackable: any = null;
  logs: any = null;
  dataSource: any = null;
  public displayedColumns: string[] = ['No.', 'Date', 'Points'];
 
  private sub: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getLogs();
      this.getTrackable();
    });
  }

  getLogs() {
    this.profileService.getLogsByTrackableId(this.id).subscribe(
      result => {
        this.logs = result.data;
        this.dataSource = new MatTableDataSource(this.logs);
      },
      error => {

      });
  }

  getTrackable(){
    this.trackable = this.dataService.trackables.find(x => x.ID == this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
