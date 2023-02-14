import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OutLibraryComponent } from './out-library.component';

describe('OutLibraryBooksComponent', () => {
  let component: OutLibraryComponent;
  let fixture: ComponentFixture<OutLibraryComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


    beforeEach(async () => {
        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ]
        });
    
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(OutLibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

  it('check HTML', () => {
    const fixture = TestBed.createComponent(OutLibraryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input')?.length).toBe(1);
});

});