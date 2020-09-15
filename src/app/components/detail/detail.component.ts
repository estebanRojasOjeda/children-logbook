import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: any = {};

  constructor(private catalogService: CatalogService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.detail = catalogService.getDetail(params['id']);
    })
  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/catalog'])
  }

}
