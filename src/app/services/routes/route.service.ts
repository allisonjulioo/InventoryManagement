import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap } from 'rxjs/operators'
import { routes } from '../../store/actions/routes.actions';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteService implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<{ routes: {} }>) { }
  ngOnInit(): void {
  }
  routeEvents(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) route = route.firstChild
        return route
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => this.store.dispatch(routes({ title: data.title }))
    )
  }
} 
