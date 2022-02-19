import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wradio',
	templateUrl: './radio.component.html',
	styleUrls: ['./radio.component.scss']
})
export class RadioComponent{
	@Input() model = false;
	@Input() name;
	@Input() value;
	@Input() label;
	@Output() modelChange = new EventEmitter()
	constructor() {}
}
