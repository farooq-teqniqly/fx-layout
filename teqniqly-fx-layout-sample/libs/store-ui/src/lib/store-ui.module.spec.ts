import { async, TestBed } from '@angular/core/testing';
import { StoreUiModule } from './store-ui.module';

describe('StoreUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreUiModule).toBeDefined();
  });
});
