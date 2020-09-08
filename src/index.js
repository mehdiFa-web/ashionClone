import './css/main.scss';
import Navbar from './Components/Navbar/index.js';
import CountDown  from "./Components/CountDown.js"

new Navbar({
  Menu : '#nav',
  Toggler :'#toggler',
  innerNav:'#inner-nav',
  width : '19',
  close : '#close'
})


CountDown()