import { Observable } from "rxjs";

export interface CanDeactivateUser {
  confirmExit(): Boolean | Observable<Boolean>
}
