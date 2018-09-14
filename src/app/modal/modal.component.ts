import {Component,  OnInit, Input} from '@angular/core';
import {ModalService} from './modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
  })
  export class ModalComponent implements OnInit {
    @Input() name: string;
    private show: Boolean = false;
    constructor(private modalService: ModalService) { }

    ngOnInit() {
      this.modalService.set(this.name, this);
    }

    clickOverlay(event: Event) {
      const target = (event.target as HTMLElement);
      if (target.classList.contains('reveal-overlay')) {
        this.toggle();
      }
    }

    toggle() {
      
      this.show = !this.show;
      if (this.show) {
        document.addEventListener('keyup', this.escapeListener);
      } else {
        document.removeEventListener('keyup', this.escapeListener);
      }
    }
    private escapeListener = (event: KeyboardEvent) => {
      if (event.which === 27 || event.keyCode === 27) {
        this.show = false;
      }
    }
}
