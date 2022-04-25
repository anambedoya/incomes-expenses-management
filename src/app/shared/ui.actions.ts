import { createAction } from '@ngrx/store';

export const isLoading = createAction('[UI Component] is loading');
export const stopLoading = createAction('[UI Component] stop loading');