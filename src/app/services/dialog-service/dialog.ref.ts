import { Observable, Subject } from 'rxjs'

export class DialogRef<T> {
  close(result?: any): void {
    this._afterClosed.next(result)
  }

  private readonly _afterClosed = new Subject<T>()
  
  afterClosed: Observable<T> = this._afterClosed.asObservable()
}