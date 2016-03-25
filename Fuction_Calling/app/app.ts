import {Component} from "angular2/core";

@Component({
	selector : "first-app",
	template : `	<p>Addition of 2+3 = {{add()}}</p>
					<button (click)='getAllUsers()'>Users</button>
					<button (click)='clear()'>Clear</button>
					<button (click)='click()'>Click</button>
					<ul *ngFor='#user of users'><li>{{user}}</li></ul>
				`
})

export class AppComponent {
	users:Array<string>;
	add():number{
		return 2 + 3;
	}
	click(){
		alert("Button clicked!!!");
	}
	getAllUsers(){
		this.users = ["Amit", "Satish", "Jayant"]
	}
	clear(){
		this.users = [];
	}
}
