import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, merge, timer, Subject } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class InactivityService {
  private inactivity$ = new Subject<void>();
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.trackInactivity(); // Only run in browser
    }
  }

  get onInactivity() {
    return this.inactivity$.asObservable();
  }

  private trackInactivity(): void {
    const mouse$ = fromEvent(document, 'mousemove');
    const key$ = fromEvent(document, 'keydown');
    const activity$ = merge(mouse$, key$);

    activity$
      .pipe(
        startWith(null),
        switchMap(() => timer(10_000)) 
        // debounce
      )
      .subscribe(() => {
        
        this.inactivity$.next();
        
      });
  }
}
