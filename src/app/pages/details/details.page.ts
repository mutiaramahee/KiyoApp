import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;
  komentar: any;

  constructor(private postService: PostService, private act : ActivatedRoute, private rtr: Router) { 
  	this.data = this.rtr.getCurrentNavigation().extras.state.detail;

  	let id = this.data.idpost;
  	this.postService.getComment(id).subscribe(res =>{
  		this.komentar = res;
  		console.log(res);
  	});
  }

  ngOnInit() {
  }

}
