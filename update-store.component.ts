import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { Store } from '../model/store.model';
@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styles: [
  ]
})
export class UpdateStoreComponent implements OnInit {
  currentStore = new Store();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private StoreService: StoreService) { }

  ngOnInit(): void {
    this.currentStore = this.StoreService.consulterstore(this.activatedRoute.snapshot.params.id);
    console.log(this.currentStore);
  }
  updateStore() { console.log(this.currentStore); this.StoreService.updateStore(this.currentStore); 
    this.StoreService.updateStore(this.currentStore);this.router.navigate(['store']);}
}
