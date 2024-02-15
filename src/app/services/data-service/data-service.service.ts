import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import SidebarData from '../../data/sidebar-menu-item-data';
import { User } from '../../models/user.model';
import { SidebarMenuItemConfiguration } from '../../models/sidebar.model';
import CurrentUserData from '../../data/current-user-data';
import { AllUserData } from '../../data/all-users-data';
import { KpiData } from '../../models/kpi-data.model';
import userKpiData from '../../data/user-kpi-data';
import { Document } from '../../models/document.model';
import allDocumentData from '../../data/all-document-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSidebarData (): Observable<SidebarMenuItemConfiguration> {
    return of(SidebarData).pipe(delay(1000))
  }

  getCurrentUser (): Observable<User> {
    return of(CurrentUserData).pipe(delay(750))
  }

  getAllUsers (): Observable<User[]> {
    return of(AllUserData).pipe(delay(1100))
  }

  createUser (user: User): Observable<User[]> {
    AllUserData.push(user)
    return of (AllUserData).pipe(delay(500))
  }

  editUser (user: User): Observable<User[]> {
    const index = AllUserData.findIndex(u => u.userID === user.userID)
    delete AllUserData[index]
    AllUserData.push(user)
    console.log({user, AllUserData})
    return of (AllUserData).pipe(delay(500))
  }

  getUserKpi (): Observable<KpiData[]> {
    return of(userKpiData).pipe(delay(250))
  }

  getAllDocuments (): Observable<Document[]> {
    return of(allDocumentData).pipe(delay(400))
  }
}
