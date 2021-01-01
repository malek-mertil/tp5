import { Component, OnInit } from '@angular/core';
import { Store } from '../model/store.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  Storee : Store[];
  

  constructor(private StoreService: StoreService ) 
  { this.Storee = StoreService.listestore(); }
  

  ngOnInit(): void {
  }
  supprimerstore(s: Store) { console.log(s); 
    let conf = confirm("are you sure ?");
    if (conf)
    this.StoreService.supprimerstore(s); }

}
