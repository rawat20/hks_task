import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    
    $("#right").click(function () {
      $('.box').animate({
        scrollLeft: '+=' + $('.box').width()
      });
    });
    $("#left").click(function () {
      $('.box').animate({
        scrollLeft: '-=' + $('.box').width()
      });
    });
  }

}
