import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosEnAdopcionComponent } from './perros-en-adopcion.component';

describe('PerrosEnAdopcionComponent', () => {
  let component: PerrosEnAdopcionComponent;
  let fixture: ComponentFixture<PerrosEnAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerrosEnAdopcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerrosEnAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
