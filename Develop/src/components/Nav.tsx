import { Link } from 'react-router-dom';

// DONE: Add necessary code to display the navigation bar and link between the pages
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};
 
export default Nav;
