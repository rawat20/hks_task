import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SampleApiService } from 'src/app/services/sample-api.service';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: any = [];
  page:number = 1;
  count:number = 100;
  pageSizes:any=[];
  pageSize:number=1;
  constructor(private service: SampleApiService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.pageSizes = new Array(10);
    this.getInititalPosts();
  }


  getInititalPosts() {
    this.posts = [];
    this.spinner.show()
    this.service.getAllPosts(this.page).subscribe((resp: any) => {
      this.spinner.hide()
      if (resp !== undefined && resp !== null) {
        if (resp.length > 0) {
          this.posts = [...resp];
          this.pageSize = resp.length;
          console.log(this.posts,this.pageSize)
        }
        else {
          alert("Data not found");
        }
      }
    },
      (error: any) => {
        console.log(error);
      });
  }


  getPage(event: any) {
    this.page = event;
    document.getElementsByClassName
    this.getInititalPosts()
  }

  getComments(event: any, post_id: number, user_id: number) {
    // console.log("ev",event,post_id)
    this.router.navigate(['getDetails'], { queryParams: { p_id: post_id, u_id: user_id } })
  }

  searchSelectedContent(e: any) {
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

