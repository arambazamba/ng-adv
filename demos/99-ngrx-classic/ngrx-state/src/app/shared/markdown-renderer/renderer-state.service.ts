import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererStateService {
  private contentVisible = signal<boolean>(true);

  getVisible() {
    console.log('visible', this.contentVisible());
    return computed(() => this.contentVisible());
  }

  setVisibility(visible: boolean) {
    this.contentVisible.set(visible);
  }

  toggleVisibility() {
    this.contentVisible.set(!this.contentVisible());
  }

}
