import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wradio',
	templateUrl: './radio.component.html',
	styleUrls: ['./radio.component.scss']
})
export class RadioComponent{
	@Input() name;
	@Input() value;
	@Input() label;
	@Input() disabled;
	@Input() wngModel = false;
	@Output() wngModelChange = new EventEmitter()
	constructor() {}

	set() {
		console.log(this.model);
		this.modelChange.emit(this.model)
	}
}
