import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="sep">
            <div>
                <img width="250px" src="https://image4.owler.com/logo/neuro-insight_owler_20221118_022918_original.png" alt="logo" />
            </div>

            {/* navigation sections */}
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/guide">Guide</Link></li>
                    <li><Link to="/booking">Diagnose</Link></li>
                    <li><Link to="/record">Records</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            {/* contact sections */}
            <div>
                <Link to="/contact"><h3>Contact Us</h3></Link>
                <ul>
                    <li><Link to="/">9876543211</Link></li>
                    <li><Link to="/">neuroInsight1826@gmail.com</Link></li>
                    <li> ______</li>
                    <li><Link to="/">Neuro-Insight</Link></li>
                    <li>1234 Brain Avenue</li>
                    <li>Suite 567</li>
                    <li>New York, NY 10001</li>
                    <li>United States</li>
                    
                </ul>
            </div>

            {/* social media sections */}
            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><Link to="https://twitter.com/AditDeshmukh?t=f7EdU9U8wkcMRcUkMdxn3A&s=08">Twitter</Link></li>
                    <li><Link to="https://instagram.com/_lost.in.fiction_?igshid=NzZlODBkYWE4Ng==">Instagram</Link></li>
                    <li><Link to="https://www.linkedin.com/in/john-baby-902880137/">LinkedIn</Link></li>
                    <li><Link to="https://www.snapchat.com/add/asadshaikh1312?share_id=fEEZla5y7Nc&locale=en-IN">Snapchat</Link></li>
                    <li><Link to="https://github.com/yashikagupta1003">Github</Link></li>
                </ul>
            </div>
        </footer>
    )
}