import  {Component} from "angular2/core";



@Component({
	selector : "first-app",
	template: `	<h1 [class]='box' [textContent]='message'></h1>
				<h1 [innerHTML]='binding'>Hello World</h1>
        		<input type="text" [(ngModel)]='user'/>
        		<p [textContent]='user'></p>
			`
})


export class MainComponent{
	constructor(){
		this.message = "Data Binding";
		this.binding = "Two Way Data Binding";
		this.user = "amit";

	}
}
