import "./App.css";
import placeholder from "./assets/placeholder.png";
import prof from "./assets/prof.jpg";
import HMB from "./assets/HMB.png";
import close from "./assets/close.png";
import LinkedIn from "./assets/LinkedIn.png";
import Github from "./assets/GitHub.png";
import email from "./assets/email.png";
import Clock from "react-live-clock";
import external from "./assets/external.png";

function App() {
  function showMobileMenu() {
    document.getElementById("page").style.display = "none";

    document.getElementById("mobileMenu").style.display = "flex";
  }

  function hideMobileMenu() {
    document.getElementById("page").style.display = "block";

    document.getElementById("mobileMenu").style.display = "none";
  }

  return (
    <div>
      <div id="mobileMenu">
        <div>
          <img src={close} class="closeIcon" onClick={hideMobileMenu}></img>
        </div>
        <div>
          <a href="#Portfolio" onClick={hideMobileMenu}>
            Portfolio
          </a>
        </div>
        <div>
          <a href="#Education" onClick={hideMobileMenu}>
            Education
          </a>
        </div>
        <div>
          <a href="#Resume" onClick={hideMobileMenu}>
            Resume
          </a>
        </div>
      </div>
      <div id="page">
        <div class="nav">
          <div>
            <img src={prof} class="ProfilePic"></img>
          </div>

          <div>
            <a>
              <img src={HMB} class="Hamburger" onClick={showMobileMenu}></img>
            </a>
          </div>
          <div class="Links">
            <div>
              <a href="#Portfolio">Portfolio</a>
            </div>

            <div>
              <a href="#Education">Education</a>
            </div>
            <div>
              <a href="#Resume">Resume</a>
            </div>
          </div>
        </div>
        <div class="Badge">
          <div class="BadgeInner">
            <p>Ahmed Khan</p>
            <p>Full Stack Developer</p>
          </div>
          <div class="BadgeIcons">
            {" "}
            <div>
              <a href="https://www.github.com/raiden707" target="_blank">
                <img src={Github}></img>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ahmedbk" target="_blank">
                <img src={LinkedIn}></img>
              </a>
            </div>
            <div>
              <a href="mailto:ahmadpsn95@gmail.com">
                <img src={email}></img>
              </a>
            </div>
          </div>
        </div>
        <div class="achorTitle">
          <h1 id="Portfolio">Portfolio</h1>
        </div>
        <div class="previousWorkContainer">
          <div class="box">
            <p>
              <b>Website </b>
            </p>
            <a href="#" target="_blank">
              <img src={placeholder} class="portfolioImage"></img>
            </a>
          </div>
          <div class="box">
            <p>
              <b>Website </b>
            </p>
            <a href="#" target="_blank">
              <img src={placeholder} class="portfolioImage"></img>
            </a>
          </div>
          <div class="box">
            <p>
              <b>Website </b>
            </p>
            <a href="#" target="_blank">
              <img src={placeholder} class="portfolioImage"></img>
            </a>
          </div>
        </div>
        <div class="achorTitle">
          <h1 id="Education">Education</h1>
        </div>

        <div class="Education_Container">
          <div class="UniContainer">
            <div class="Degree">
              <p>Masters in Computer Science</p>
            </div>
            <div class="Instituion">
              <p>University of Birmingham</p>
            </div>
            <div>Currently Enrolled</div>
          </div>
          <div class="UniContainer">
            <div class="Degree">
              <p>Bachelors in Business Administration</p>
            </div>
            <div class="Instituion">
              <p>Heriot Watt University</p>
            </div>
            <div>2017-2020</div>
          </div>
        </div>

        <div class="achorTitle">
          <h1 id="Resume">Resume</h1>
        </div>
        <div>
          <div class="Resume_Download">
            <a>Please find my Resume here:</a>
            <a href="https://drive.google.com/file/d/1Le9ItSkBfKXJq1DgD0sVtu6Jx8i68YWp/view?usp=sharing">
              <img src={external}></img>
            </a>
          </div>
        </div>

        <div class="FooterHolder">
          <div class="Footer">
            <div class="clock">
              <div>
                <Clock
                  format={"h:mm:ss a"}
                  style={{ fontSize: "1.5em", color: "white" }}
                  ticking={true}
                />
              </div>
            </div>
          </div>
          <div class="Footer">
            <div>
              <a href="#">Scroll to Top</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
