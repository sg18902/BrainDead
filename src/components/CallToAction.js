import { Link } from "react-router-dom";

export default function CallToAction(){
    return (
      <div className="sep ctaContainer">
        <div>
          <h2>Neuro-Insight</h2>
          <h4>New York</h4>
          <p>
          Leading the charge in brain health innovation with state-of-the-art technology, meticulous analysis, and unwavering dedication to ensure a healthier, brighter future for all.
          </p>
          <Link to="/booking" className="btn btn-warning">
          Launch Diagnosis
          </Link>
        </div>
        <div>
          <img width="300px" src="https://w0.peakpx.com/wallpaper/381/280/HD-wallpaper-ambiguity-tobe-brain-duality-mind-minimal-thinking.jpg" alt="reserveTable" />
        </div>
      </div>
    );
}