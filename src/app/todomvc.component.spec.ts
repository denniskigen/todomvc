import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodomvcAppComponent } from '../app/todomvc.component';

beforeEachProviders(() => [TodomvcAppComponent]);

describe('App: Todomvc', () => {
  it('should create the app',
      inject([TodomvcAppComponent], (app: TodomvcAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'todomvc works!\'',
      inject([TodomvcAppComponent], (app: TodomvcAppComponent) => {
    expect(app.title).toEqual('todomvc works!');
  }));
});
