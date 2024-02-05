import './portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="portfolio flex items-center justify-center h-[100vh] w-screen">
      <div className="portfolioController flex items-center justify-center h-[70vh] w-[90%] m-auto">
        <div className="content">
          <h1 className="heading text-5xl font-bold">
            I&apos;m Shubham Mishra
          </h1>
          <p className="desc">
            Ia&apos;m a self taught passionate Full Stack Web Developer in
            India. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci enim nisi porro temporibus incidunt ullam id ipsa, cumque
            rerum blanditiis.
          </p>
          <p className="desc">
            Ia&apos;m a self taught passionate Full Stack Web Developer in
            India. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci enim nisi porro temporibus incidunt ullam id ipsa, cumque
            rerum blanditiis.
          </p>
          <p className="desc">
            Ia&apos;m a self taught passionate Full Stack Web Developer in
            India. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci enim nisi porro temporibus incidunt ullam id ipsa, cumque
            rerum blanditiis.
          </p>
          <Link to="/info">
            <button className="btn shadow-lg shrink-0">Know More</button>
          </Link>
        </div>
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/17403707/pexels-photo-17403707/free-photo-of-young-man-in-a-trendy-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;