import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairingResultComponent } from './pairing-result.component';

describe('PairingResultComponent', () => {
  let component: PairingResultComponent;
  let fixture: ComponentFixture<PairingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairingResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
