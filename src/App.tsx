import './styles/global.scss';
import { React, render } from "./lib/react";
import HomePage from './pages/home/Home';
const App = () => <HomePage />

render(App, document.getElementById('root'));
