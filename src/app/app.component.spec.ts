import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        DemoMaterialModule,
        PdfViewerModule
      ]
    }).compileComponents();
  }));
  
});
