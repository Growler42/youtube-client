import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from 'src/app/shared/models/search-item.model';
import { SortingOrder } from 'src/app/shared/models/sorting-order';

@Pipe({
	name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
	transform(
		value: SearchItemModel[] | undefined,
		sortingOrder: SortingOrder,
	): SearchItemModel[] | undefined {
		if (!value) return;
		return [...value].sort((a, b) => {
			const first: number = new Date(a.snippet.publishedAt).getTime();
			const second: number = new Date(b.snippet.publishedAt).getTime();
			if (sortingOrder === SortingOrder.Ascending) return first - second;
			if (sortingOrder === SortingOrder.Descending) return second - first;
			return 0;
		});
	}
}
