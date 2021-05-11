import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterDetailComponent } from './voter-detail.component';

describe('VoterDetailComponent', () => {
  let component: VoterDetailComponent;
  let fixture: ComponentFixture<VoterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
