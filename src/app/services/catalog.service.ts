import { Injectable } from '@angular/core';
import { Catalog } from '../services/domain/catalog';

@Injectable()
export class CatalogService {

  private catalog: Catalog[] = [
    {
      "id": 0,
      "name": "Buzo Nuevo",
      "desc": "Este buzo mel regalo mi abuela Mirta el dia que fuimos a visitarlos en pandemia",
      "img": "assets/img/buzo-nuevo.jpg",
      "date": "07/09/2020",
      "time": "10:00",
      "category": "ropa"

    },
    {
      "id": 1,
      "name": "Germinando semilla",
      "desc": "El otro dia con mi mamá estuvimos plantand sel¡millas para cultivar en el huerto",
      "img": "assets/img/planta.jpg",
      "date": "08/09/2020",
      "time": "11:00",
      "category": "huerto"

    }
  ]

  constructor() {

  }

  getCatalog() {
    return this.catalog;
  }

  getDetail(id: number) {
    return this.catalog[id];
  }

  searchThings(data: string):Catalog[] {

    let catalog: Catalog[] = [];
    data = data.toLowerCase();

    for (let el of this.catalog) {

      let name = el.name.toLowerCase();
      if (name.indexOf(data) >= 0) {
          catalog.push(el)
      }

    }
    return catalog;
  }
}
