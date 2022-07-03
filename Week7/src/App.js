import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import StatsPage from "./pages/StatsPage";
import './styles/App.css';

export default function App() {


return (
    <BrowserRouter>
      <header>
        <ul id="main-menu">
          <span className='menu-label'>Main Menu: </span>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          {/* <li><Link to="/quiz">Quiz</Link></li> */}
          <li><Link to="/search">Search</Link></li>
        </ul>
    </header>
    <main>
        <Routes>
          <Route exact={true} path='/' element={<HomePage />} />
          <Route path='/stats'
            element={<StatsPage type="Stats" />} />
          {/* <Route path='/quiz'
            element={<QuizPage type="Quiz" />} /> */}
        </Routes>
    </main>
    </BrowserRouter>
);
}