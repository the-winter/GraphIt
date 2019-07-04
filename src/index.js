import { hello, draw } from './hello';
import { g } from './graphs.js';
import './styles/main.scss';
import 'jquery';
import 'bootstrap/scss/bootstrap.scss';
import 'dygraphs';

window.draw = draw;

console.log(hello('Hi again'));