import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
// import moment from 'moment'


@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss'],
})
export class BundlesComponent implements OnInit {
  constructor() {
    // this.strDt = moment(new Date()).add(1, 'days').format('MMM Do YY');
    this.strDt = format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  strDt: string;

  ngOnInit() { }
}
