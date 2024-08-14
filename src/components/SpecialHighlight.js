import { Link } from "react-router-dom";

export default function SpecialHighlight(){
    return (
      <div>
        <div className="sep shct1">
          <div>
            <h1>Neurology 101</h1>
          </div>
          <div>
            <button type="button" className="btn btn-warning">
              Guide
            </button>
          </div>
        </div>
        <div className="sep">
          {/* Special Item 1 */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://i.pinimg.com/1200x/23/5c/2e/235c2ef7f31e15491ffe1345a7e395a5.jpg"
              className="card-img-top"
              alt="Neurological Marvel"
            />
            <div className="card-body">
              <h5 className="card-title">Neurological Marvel</h5>
              <p className="card-text">
              The brain is a complex organ that weighs about 3 pounds and is responsible for all our thoughts, emotions, and actions.
              </p>
              <Link to = "/guide">
              <a href="#" className="btn btn-primary">
                Know more
              </a></Link>
            </div>
          </div>

          {/* Special Item 3 */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://img.goodfon.com/wallpaper/big/4/26/brain-mozg-plata-impulsy-minimalizm-linii-chernyi-fon.jpg"
              className="card-img-top"
              alt="Super-Speed Processor"
            />
            <div className="card-body">
              <h5 className="card-title">Super-Speed Processor</h5>
              <p className="card-text">
              Your brain can process information at lightning speed, with some estimates suggesting it can perform up to 120 trillion operations per second!
              </p>
              <Link to = "/guide">
              <a href="#" className="btn btn-primary">
                Know more
              </a></Link>
            </div>
          </div>

          {/* Special Item 3 */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/8213C6C1-A39B-47DC-AAD4ACA2F89A79F3_source.jpg?w=590&h=800&7AACBE45-019E-48A7-82D1291F4110419E"
              className="card-img-top"
              alt="Memory Master"
            />
            <div className="card-body">
              <h5 className="card-title">Memory Master</h5>
              <p className="card-text">
              Your brain stores an incredible amount of information. It's estimated that the human brain can hold up to 2.5 petabytes of data!
              </p>
              <Link to = "/guide">
              <a href="#" className="btn btn-primary">
                Know more
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    );
}