import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
	name: 'gtIsEditable'
})
export class GtIsEditablePipe implements PipeTransform {
	transform(property: any, row: any, refreshPipe: boolean): boolean {
		if (typeof property === 'function') {
			return property(row);
		} else {
			return false;
		}
	}
}
