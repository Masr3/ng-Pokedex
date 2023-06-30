import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoComponent } from './pokemon-info.component';

describe('PokemonInfoComponent', () => {
  let component: PokemonInfoComponent;
  let fixture: ComponentFixture<PokemonInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonInfoComponent]
    });
    fixture = TestBed.createComponent(PokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
