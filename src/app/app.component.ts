import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<h1>New modification</h1>
	<h1>{{title}}</h1>
	<fa-other>
		<h1>Hello ng Content</h1>
	</fa-other>
  `,
  styles: [`
	h1{
		color: red;
	}
  `]
})
export class AppComponent {
  title = 'app works!';
}
