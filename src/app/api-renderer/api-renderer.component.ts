import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-api-renderer',
  templateUrl: './api-renderer.component.html',
  styleUrls: ['./api-renderer.component.scss']
})
export class ApiRendererComponent implements OnInit {

  apiRendererForm: FormGroup;

  @Input() url: string;
  @Input() body;
  @Input() method: string;
  @Input() title: string;
  outputResponse: string;


  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.apiRendererForm = this.formGroup;
  }

  get formGroup() {
    let group: any = {};
    if (this.body.length) {
      this.body.forEach(element => {
        group[element.name] = element.required ? new FormControl(element.value || '', Validators.required)
          : new FormControl(element.value || '');
      });
    }
    return new FormGroup(group);;
  }

  submitData(method: string, apiRendererForm) {
    console.log(apiRendererForm.value);
    let payload = {
      ...apiRendererForm.value
    }
    if (method.toLowerCase() === 'post') {
      this.http.post(this.url, payload).toPromise().then((data: any) => {
        this.outputResponse = JSON.stringify(data);
      })
    } else if (method.toLowerCase() === 'put') {
      this.http.put(this.url, payload).toPromise().then((data: any) => {
        this.outputResponse = JSON.stringify(data);
      })
    } else if (method.toLowerCase() === 'get') {
      this.http.get(this.url).toPromise().then((data: any) => {
        this.outputResponse = JSON.stringify(data);
      })
    } else if (method.toLowerCase() === 'delete') {
      this.http.delete(this.url).toPromise().then((data: any) => {
        this.outputResponse = JSON.stringify(data);
      })
    }
  }


}
