import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements AfterViewInit {

  @ViewChild('footerRef') footerRef!: ElementRef;

  ngAfterViewInit() {

    const footer = this.footerRef.nativeElement;

    footer.addEventListener('mousemove', (e: MouseEvent) => {

      const rect = footer.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      footer.style.setProperty('--x', x + 'px');
      footer.style.setProperty('--y', y + 'px');

    });

  }

}