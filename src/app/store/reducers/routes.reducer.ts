import { createReducer, on } from '@ngrx/store'
import { ROUTE } from '../state/routes.state';
import { routes } from '../actions/routes.actions';


export const reducer = createReducer(
  ROUTE,
  on(routes, (state, { title }) => ({
    ...state,
    title,
  })),
) 