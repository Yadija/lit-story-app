// Import our custom css
import '../sass/main.scss';

// Import bootstrap
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

// Import components
import './components';

// Import pages
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Add from './pages/add';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const routes = {
  '/': Dashboard,
  '/about.html': About,
  '/add.html': Add,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
