import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="imgBlock">
        <Link to="/apple">
          <img
            src="https://www.novasourcerenal.com/sites/g/files/lpfasj371/files/styles/289_x_289/public/2019-07/APPLE%20CINNAMON%20SHAKE.jpg?h=e3ff4d16&itok=UemFeuSj"
            alt=""
          />
        </Link>
      </div>

      <div className="imgBlock">
        <Link to="/appricot">
          <img
            src="https://media.istockphoto.com/photos/apricot-isolate-apricots-with-slice-on-white-fresh-apricots-with-picture-id1159003963"
            alt=""
          />
        </Link>
      </div>

      <div className="imgBlock">
        <Link to="/lime">
          <img
            src="https://media.istockphoto.com/photos/lemon-picture-id106491732"
            alt=""
          />
        </Link>
      </div>

      <div className="imgBlock">
        <Link to="/lychee">
          <img
            src="https://img.freepik.com/premium-photo/lychee-tropical-fruit-with-leaves-white-background_253984-4215.jpg?w=2000"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};
