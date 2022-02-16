import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable-fighters',
  templateUrl: './datatable-fighters.component.html',
  styleUrls: ['./datatable-fighters.component.css']
})
export class DatatableFightersComponent implements OnInit {

  private isVisible:boolean = false;
  public columnsNames:string[] = [];
  public dataTableData: DataTables.Settings={};
  public fightersLoaded:any;

  constructor(private http:HttpClient) {

    this.http.get('https://run.mocky.io/v3/61a8744f-1df5-4623-a457-a229ffaf9f69')
      .subscribe(fighters => {
        this.columnsNames = Object.keys(Object.values(fighters)[0]);

        this.fightersLoaded = fighters;
      }, error => console.error(error))

  }

  ngOnInit(): void {
    this.dataTableData = {
      pagingType: 'full_numbers',
      pageLength: 6,
      processing: true
    }
  }

  getIsVisible(){
    return this.isVisible;
  }

  invertIsVisible(){
    this.isVisible = !this.isVisible;
  }
}
