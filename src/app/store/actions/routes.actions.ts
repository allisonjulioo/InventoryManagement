import { createAction, props } from '@ngrx/store'

enum ActionTypes {
  Title = 'TITLE',
}
export const routes = createAction(
  ActionTypes.Title,
  props<{
    title: string,
  }>()
)