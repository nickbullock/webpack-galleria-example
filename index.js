import * as $ from 'jquery';
import galleria from 'galleria';

window.Galleria = galleria;
window.jQuery = $;

Galleria.loadTheme('assets/galleria.classic.js');
Galleria.run('.galleria');
