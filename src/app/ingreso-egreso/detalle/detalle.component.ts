import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresosEgresos: IngresoEgreso[] = [];
  ingresosSubs!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.ingresosSubs = this.store.select('ingresosEgreso').subscribe(({ items }) => this.ingresosEgresos = items);
  }

  ngOnDestroy(): void {
    this.ingresosSubs.unsubscribe();
  }

  borrar(uid: string | undefined) {
    console.log(uid);
  }

}
