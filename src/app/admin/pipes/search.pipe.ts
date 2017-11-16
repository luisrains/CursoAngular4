import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'search'
})

@Injectable()
export class SearchPipe implements PipeTransform{
	transform(items: any, term:any): any{
		if(term===undefined){
			return items;
		}

		//busca en el nombre de los elemente, el texto que estee incluido en term
		return items.filter(function(item){
			return item.name.toLowerCase().includes(term.toLowerCase());
		});

	}
}