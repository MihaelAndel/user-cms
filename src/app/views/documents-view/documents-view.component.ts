import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { SearchBarComponent } from '../../components/search-bar/search-bar.component'
import { BehaviorSubject, map, shareReplay, startWith, switchMap, tap } from 'rxjs'
import { DocumentsToolbarComponent } from '../../components/documents-toolbar/documents-toolbar.component'
import { DocumentsDatatableComponent } from '../../components/documents-datatable/documents-datatable.component'
import { DataService } from '../../services/data-service/data-service.service'

@Component({
  selector: 'app-documents-view',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, DocumentsToolbarComponent, DocumentsDatatableComponent],
  templateUrl: './documents-view.component.html',
  styleUrl: './documents-view.component.scss'
})
export class DocumentsViewComponent {
  isLoading$ = new BehaviorSubject<boolean>(false)
  search = new BehaviorSubject<string>('')
  dataService = inject(DataService)

  documents$ = this.dataService.getAllDocuments().pipe(shareReplay(1))

  filteredDocuments$ = this.search.pipe(
    tap(() => this.isLoading$.next(true)),
    startWith(''),
    switchMap((text) => this.documents$.pipe(
      map((documents) => documents.filter(d => d.name.toUpperCase().includes(text.toUpperCase()))),
      tap(() => this.isLoading$.next(false))
    ))
  )

  searched(term: string) {
    this.search.next(term)
  }
}
