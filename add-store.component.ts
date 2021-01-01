import { Component, OnInit } from '@angular/core';
import { Store } from '../model/store.model';
import { StoreService } from '../services/store.service';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  newStore = new Store();
  constructor(private StoreService: StoreService) { }

  ngOnInit(): void {
  }
  addStore()
  {this.StoreService.ajouterstore(this.newStore)};
}
