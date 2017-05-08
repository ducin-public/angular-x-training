import {Component} from '@angular/core';

/**
 * trying to add global CSS into webpack build instead of HTML head/link/rel
 *
 * styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css'],
 * https://github.com/webpack-contrib/style-loader/issues/123#issuecomment-289265180
 * http://stackoverflow.com/a/43586539/769384
 * https://github.com/webpack-contrib/css-loader/issues/38#issuecomment-72287584
 * http://stackoverflow.com/a/40073067/769384:
 * file-loader, url-loader
 */

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
