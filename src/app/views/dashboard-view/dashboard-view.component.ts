import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { DashboardDatatableComponent } from '../../components/dashboard-datatable/dashboard-datatable.component';
import { DataService } from '../../services/data-service/data-service.service';
import { BehaviorSubject, Subject, filter, map, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DialogService } from '../../services/dialog-service/dialog-service.service';
import { CreateUserComponent } from '../../components/create-user/create-user.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dasboard-view',
  standalone: true,
  imports: [SearchBarComponent, PaginatorComponent, DashboardDatatableComponent, CommonModule],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent {
  dataService = inject(DataService)
  dialogService = inject(DialogService)

  search = new BehaviorSubject<string>('')
  refreshUsersList = new Subject<void>()
  isLoading$ = new BehaviorSubject<boolean>(true)

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

  editUser (user: User) {
    const dialogRef = this.dialogService.open<User>(CreateUserComponent, {
      title: `Edit User ${user.name} ${user.surname}`,
      confirm: 'Edit User',
      cancel: 'Cancel',
      data: {
        user,
        type: 'edit'
      }
    })
    dialogRef.afterClosed.subscribe((result) => {
      if (result) {
        this.editExistingUser(result)
      }
    })
  }

  editExistingUser (user: User) {
    this.isLoading$.next(true)
    this.dataService.editUser({...user}).subscribe(() => {
      this.refreshUsersList.next()
    })
  }
}
