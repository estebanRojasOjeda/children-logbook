import { Injectable } from '@angular/core';
import Catalogo from '../../assets/data/data.json ';

@Injectable()
export class CatalogService {


  constructor() {
    console.log(Catalogo)
  }
}
