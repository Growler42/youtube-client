import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/serch-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [HeaderComponent, SearchBarComponent, NotFoundComponent],
	imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
	exports: [HeaderComponent],
})
export class CoreModule {}
