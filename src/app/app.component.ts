import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RouteService } from './services/routes/route.service';


export interface IRouter {
  title: string
}

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  constructor(
    private evtRoute: RouteService,
    private store: Store<{ routes: {} }>
  ) {
    this.store.pipe(select('routes'))
      .subscribe((data: IRouter) => {
        this.title = data.title;
      })
  }
  ngOnInit(): void {
    this.evtRoute.routeEvents();
  }
  ngAfterViewInit(): void {
  }
}
