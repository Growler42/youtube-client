import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchMockupService } from '../../services/search-mockup.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	searchForm: FormGroup = new FormGroup({
		searchInput: new FormControl(''),
	});

	constructor(private searchService: SearchMockupService) {}

	onSubmit(e: Event): void {
		e.preventDefault();
		this.searchService.search(this.searchForm.value.searchInput);
	}
}
