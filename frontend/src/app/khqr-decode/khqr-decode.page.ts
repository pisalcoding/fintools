import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { KHQR_BACKEND_PATH, KHQR_DECODE_ENDPOINT } from 'src/configs/config';
import { KhqrData, KhqrResponse } from './khqr.response.model';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { WINDOW } from '../WINDOW_PROVIDERS';

@Component({
  selector: 'app-khqr-decode',
  templateUrl: './khqr-decode.page.html',
  styleUrls: ['./khqr-decode.page.scss'],
})
export class KhqrDecodePage implements OnInit {
  @ViewChild('fileButton', { static: false }) 
  fileButton: any;

  imageURL: any;
  resultType: string = "KHQR_SDK";

  @ViewChild(JsonEditorComponent, { static: false }) 
  editor: JsonEditorComponent;
  editorOptions: JsonEditorOptions;
  emvJson = {};
  emvEntries: any;
  khqrData: KhqrData;
  qrText: string;

  constructor(
    public httpClient: HttpClient, 
    @Inject(WINDOW) private window: Window
  ) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'text';
    this.editorOptions.statusBar = false;
  }

  ngOnInit() {
  }

  private decodeKhqr(file: File) {
    let body = new FormData();
    body.append('file', file);
    let host = this.window.location.protocol + "//" + this.window.location.hostname
    let url = host + KHQR_BACKEND_PATH + KHQR_DECODE_ENDPOINT;

    this.httpClient.post<KhqrResponse>(url, body).subscribe( res => {
      if (res.data.khqrSdkData.data != null) {
        this.emvJson = res.data.emvSdkData;
        this.emvEntries = Object.entries(this.emvJson);
        this.khqrData = res.data.khqrSdkData;
        this.qrText = res.data.text;
      }
    });
  }

  uploadButtonClicked() {
    this.fileButton.nativeElement.click();
  }

  fileChanged(event: any) {
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    this.decodeKhqr(event.target.files[0]);
  }
  
}

