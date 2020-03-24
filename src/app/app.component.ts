import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   url: string = 'https://jsonplaceholder.typicode.com/posts/';
   body: Array<Object> =  [
    {
      name: 'Email',
      type: 'email',
      maxlength: 24,
      minlength: 3,
      id: 'email'
    },
    {
      name: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
      id: 'fullname'
    },
    {
      name: 'Phone',
      type: 'tel',
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
      id: 'phone'
    },
  ];
   method: string = 'POST';
   title: string = 'Change User';
}
