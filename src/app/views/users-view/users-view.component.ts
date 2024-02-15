import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BehaviorSubject, Subject, map, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { UsersDatatableComponent } from '../../components/users-datatable copy/users-datatable.component';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data-service/data-service.service';
import { DialogService } from '../../services/dialog-service/dialog-service.service';
import { KpiRowComponent } from '../../components/kpi-row/kpi-row.component';

@Component({
  selector: 'app-users-view',
  standalone: true,
  imports: [SearchBarComponent, PaginatorComponent, CommonModule, UsersDatatableComponent, KpiRowComponent],
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.scss'
})
export class UsersViewComponent {

  dataService = inject(DataService)
  dialogService = inject(DialogService)

  search = new BehaviorSubject<string>('')
  refreshUsersList = new Subject<void>()
  isLoading$ = new BehaviorSubject<boolean>(true)

  kpiData$ = this.dataService.getUserKpi()

  users$ = this.refreshUsersList.pipe(
    startWith([]),
    switchMap(
      () => this.dataService.getAllUsers()
    ),
    tap(() => {
      this.isLoading$.next(false)
    }),
    shareReplay(1),
  )

  filteredUsers$ = this.search
    .asObservable()
    .pipe(
      startWith(''),
      switchMap((term) =>
        this.users$.pipe(
          map((users) =>
            users.filter((user) =>
              `${user.name.toUpperCase()} ${user.surname.toUpperCase()}`.includes(term.toUpperCase())
            )
          )
        )
      )
    )

  searched(term: string) {
    this.search.next(term)
  }

  createUser () {
    const dialogRef = this.dialogService.open<User>(CreateUserComponent, {
      title: 'Add User',
      confirm: 'Add User',
      cancel: 'Cancel',
    })
    dialogRef.afterClosed.subscribe((result) => {
      if (result) {
        this.addNewUser(result)
      }
    })
  }

  addNewUser (data: User): void {
    this.isLoading$.next(true)
    this.dataService.createUser(data).subscribe(() => {
      this.refreshUsersList.next()
    })
  }
}
