import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SampleApiService } from 'src/app/services/sample-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  post_id: any = [];
  user_id: any = [];
  userDetails: any = [];
  comments: any = []
  constructor(private routes: ActivatedRoute, private service: SampleApiService, private route: Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.post_id = this.routes.snapshot.queryParams['p_id'];
    this.user_id = this.routes.snapshot.queryParams['u_id'];
    this.getUserDetails();
  }

  getComments() {
    this.spinner.show()
    this.service.getAllComments(this.post_id).subscribe((resp: any) => {
      this.spinner.hide();
      if (resp !== undefined && resp !== null) {
        if (resp.length > 0) {
          this.comments = resp;
        }
        else {
          alert("No comments found");
        }
      }
    }, (error:any) => {
      console.log(error);
    })
  }

  getUserDetails() {
    this.spinner.show()
    this.service.getUserDetails(this.user_id).subscribe((resp: any) => {
      this.spinner.hide();
      if (resp !== undefined && resp !== null) {
        this.userDetails = (resp);
        this.getComments();
      }
    },
    (error:any) => {
      console.log(error);
    })
  }

  back() {
    this.route.navigate(['dashboard'])
  }

  searchSelectedContent(e:any) {
    const searchItem = e.target.value.toLowerCase();
    const spanItem = document.querySelectorAll('.searchSelectedContent');
    spanItem.forEach((item: any) => {
      // console.log(item.textContent);
      if (item.textContent.toLowerCase().indexOf(searchItem) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}
