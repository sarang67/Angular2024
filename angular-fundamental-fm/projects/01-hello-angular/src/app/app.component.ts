import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <ol>
      <li>Movie: machis movie</li>
      <li>song: do pal ka khawon ka karvan</li>
      <li>BookL: no book</li>
    </ol>

    <section>
      <p>Welcoma back {{ userName }}</p>
    </section>
  `,
  styles: `ol {
    list-style-type: upper-roman
  }`,
})
export class AppComponent {
  userName = 'codingChamp';
}
