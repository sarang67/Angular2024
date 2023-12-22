import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer(on interaction(loadPosts)){
      <app-posts />
      }@loading {
      <p>Please wait</p>
      }@placeholder {
      <img
        src="”placeholder.png”"
        alt="”placeholder”"
        width="100"
        height="100"
      />
      }@error {
      <p>some error is there</p>
      }
    </section>
  `,
})
export class AppComponent {}
