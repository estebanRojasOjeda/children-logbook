import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog-found',
  templateUrl: './catalog-found.component.html',
  styleUrls: ['./catalog-found.component.scss']
})
export class CatalogFoundComponent implements OnInit {

  catalog:any[] = [];
  searching:any;

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(el =>{

      this.searching = el['name'];
      this.catalog = this.catalogService.searchThings(el['name']);

    })
  }

  viewDetail(id:number){
    this.router.navigate(['/detail', id])
  }

}
