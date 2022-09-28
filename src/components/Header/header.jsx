import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/apple">
          <li>Apple</li>
        </Link>
        <Link to="/appricot">
          <li>Appricot</li>
        </Link>
        <Link to="/lime">
          <li>Lime</li>
        </Link>
        <Link to="/lychee">
          <li>Lichee</li>
        </Link>
      </ul>
    </>
  );
};
