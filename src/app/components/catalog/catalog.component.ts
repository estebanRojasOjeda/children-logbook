import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { Catalog } from '../../services/domain/catalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalog:Catalog[]= [];

  constructor(private catalogService: CatalogService, private router: Router) {

  }

  ngOnInit(): void {
    this.catalog = this.catalogService.getCatalog();
  }

  viewDetail(id:number){
    this.router.navigate(['/detail', id])
  }

}
