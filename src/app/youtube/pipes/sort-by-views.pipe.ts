import { Pipe, PipeTransform } from '@angular/core';
import { StatsItemModel } from 'src/app/shared/models/search-item.model';
import { SortingOrder } from 'src/app/shared/models/sorting-order';

@Pipe({
	name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
	transform(
		value: StatsItemModel[] | undefined,
		sortingOrder: SortingOrder,
	): StatsItemModel[] | undefined {
		if (!value) return;
		return [...value].sort((a, b) => {
			const first: number = Number(a.statistics.viewCount);
			const second: number = Number(b.statistics.viewCount);
			if (sortingOrder === SortingOrder.Ascending) return first - second;
			if (sortingOrder === SortingOrder.Descending) return second - first;
			return 0;
		});
	}
}
