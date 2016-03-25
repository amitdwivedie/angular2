import  {Component} from "angular2/core";
import  {bootstrap} from "angular2/platform/browser";


@Component({
	selector : "first-app",
	template: "<h1>{{message}}</h1>"
})


export class MainComponent{
	message:string = "Hello, this is Angular2!!!";
}
bootstrap(MainComponent);