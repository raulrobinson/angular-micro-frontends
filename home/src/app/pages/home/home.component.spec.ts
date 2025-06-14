import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { StorageService } from 'transer-web-lib-design';

const storageServiceMock = {
  clearStorage: jasmine.createSpy('clearStorage'),
  token: {
    access_token: '',
  },
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideHttpClient(),
        {
          provide: 'baseUrl',
          useValue:
            'https://bz6r7c1u5d.execute-api.us-east-1.amazonaws.com/dev/v1',
        },
        {
          provide: 'hash',
          useValue: 'Fk.vh&iXL2*5I#>',
        },
        {
          provide: 'baseUrlAuth',
          useValue: 'https://authdev.transer.digital',
        },
        { provide: StorageService, useValue: storageServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.showHome = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userName to empty string when token is invalid', () => {
    storageServiceMock.token.access_token = 'invalid.token.value';

    component.setUserName();

    expect(component.userName).toBe('');
  });

  it('should set userName to empty string when token does not contain name', () => {
    storageServiceMock.token.access_token = btoa(JSON.stringify({}));

    component.setUserName();

    expect(component.userName).toBe('');
  });
});
