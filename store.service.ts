import { Injectable } from '@angular/core';
import { Store } from '../model/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: Store;
 
  ajouterStore(newStore: Store) {
    throw new Error('Method not implemented.');
  }
  updateStore(currentStore: Store) {
    throw new Error('Method not implemented.');
  }

 Storee: Store[];
 
  constructor() { 
    this.Storee = [
      { idJeux : 1, nomJeux : "Cyberpunk 2077 ", prixJeux : 59.99, dateCreation: new Date("10/12/2020")},
      { idJeux : 2, nomJeux : "Assassin's Creed Valhalla", prixJeux : 49.99, dateCreation : new Date("10/11/2020")},
      { idJeux : 3, nomJeux :"DOOM Eternal", prixJeux : 59.99, dateCreation : new Date("20/03/2020")},
    ];
  }
    listestore():Store[ ] {
      return this.Storee;
}
ajouterstore( St: Store){ this.Storee.push(St); }
supprimerstore( st: Store){
  const index = this.Storee.indexOf(st, 0); 
  if (index > -1) 
  { this.Storee.splice(index, 1); 
  console.log;}
} 
consulterstore(id:number): Store{
   this.store = this.Storee.find(st => st.idJeux == id); 
  return this.store; 
}
updatestore
(st:Store) {console.log(st); this.supprimerstore(st); this.ajouterstore(st);this.trierstore(); }
  trierstore() {
    this.Storee = this.Storee.sort((n1,n2) => { if (n1.idJeux > n2.idJeux) { return 1; } if (n1.idJeux < n2.idJeux) { return -1; } return 0; });
  }





}
