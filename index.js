import * as $ from 'jquery';
import galleria from 'galleria';

window.Galleria = galleria;
window.jQuery = $;

Galleria.loadTheme('node_modules/galleria/dist/themes/classic/galleria.classic.js');
Galleria.run('.galleria');
