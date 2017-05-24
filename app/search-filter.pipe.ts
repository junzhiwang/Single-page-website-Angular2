import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'find'
})
export class SearchPipe implements PipeTransform {
	transform(pipeData, [filters]) {
		return pipeData.filter((eachItem) => {
			return eachItem['name'].toLowerCase().includes(
				filters.toLowerCase());
		})
	}
}