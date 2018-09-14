import {Directive, Input, HostListener} from '@angular/core';
import {ModalService} from './modal.service';

@Directive({
    selector: '[modalOpen]'
  })
  export class ModalOpenDirective {
    @Input() modalOpen: string;
    constructor(private modalService: ModalService) {}
    @HostListener('click') onClick() {
      const modal = this.modalService.get(this.modalOpen);
      if (!modal) {
        console.error('No modal named %s', this.modalOpen);
        return;
      }
      modal.toggle();
    }
  }

