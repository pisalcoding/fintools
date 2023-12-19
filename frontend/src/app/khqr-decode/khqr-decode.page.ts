import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { KHQR_BACKEND_URL, KHQR_DECODE_ENDPOINT } from 'src/configs/config';
import { KhqrData, KhqrResponse } from './khqr.response.model';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';


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
  khqrData: KhqrData;

  @ViewChild(JsonEditorComponent, { static: false }) 
  editor: JsonEditorComponent;
  editorOptions: JsonEditorOptions;
  emvJson = {};

  khqrjson: string;

  constructor(public httpClient: HttpClient) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'text';
    // this.editorOptions.language = "JSON";
  }

  ngOnInit() {
  }

  private decodeKhqr(file: File) {
    let body = new FormData();
    body.append('file', file);
    let url = KHQR_BACKEND_URL + KHQR_DECODE_ENDPOINT;

    this.httpClient.post<KhqrResponse>(url, body).subscribe( res => {
      if (res.data.khqrSdkData.data != null) {
        this.emvJson = res.data.emvSdkData;
        this.khqrjson = JSON.stringify(res.data.khqrSdkData);
        this.khqrData = res.data.khqrSdkData;
      }
    });
  }

  uploadButtonClicked() {
    this.fileButton.nativeElement.click();
  }

  fileChanged(event: any) {
    const files = event.target.files
    const reader = new FileReader()
    reader.onload = () => {
      this.imageURL = reader.result
    }
    reader.readAsDataURL(event.target.files[0])
    this.decodeKhqr(event.target.files[0])
  }
  
}

