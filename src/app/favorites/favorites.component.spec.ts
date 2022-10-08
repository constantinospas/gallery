import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../store/favorites/favorites.reducer';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show favorite images', () => {
    //fixme
    expect(fixture.nativeElement.querySelector('[data-test="images"]')).toBeTruthy();
  });

  it('should show message', () => {
    //fixme
    expect(fixture.nativeElement.querySelector('[data-test="message"]')).toBeTruthy();
  });

  it('should redirect to photo', () => {
    //todo
  });

  it('should remove photo from favorites', () => {
    //todo
  });

  it('should navigate to favorites after removing', () => {
    //todo
  });


});
