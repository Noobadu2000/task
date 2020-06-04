
import { Component, ViewChild } from '@angular/core';
import {
  PDFProgressData,
  PDFDocumentProxy,
  PDFSource
} from './pdf-viewer/pdf-viewer.module';

import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@Component({
  moduleId: module.id,
  selector: 'pdf-viewer-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pdfSrc: string | PDFSource | ArrayBuffer = '';



  renderText = true;
  isOutlineShown = true;
  pdfQuery = '';

  @ViewChild(PdfViewerComponent)
  private pdfComponent: PdfViewerComponent;


  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }
  searchQueryChanged(newQuery: string) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.pdfFindController.executeCommand('find', {
        caseSensitive: false,
        findPrevious: false,
        highlightAll: true,
        phraseSearch: true,
        query: this.pdfQuery

      });
    }
    }
  }
