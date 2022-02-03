var __html = require("../components/MyChallenge.js");
var template = { __html: __html };
const imgPathGithub = "/images/githublogo.png";
function VastChallengeItem() {
  return (
    <div className="container container-fluid">
      <div className="jumbotron">
        <ul>
          <h1>Vast Challenge 2018</h1>
          <hr class="my-4"></hr>
          <p>
            Download and test yourself!
            <a href="https://github.com/RiceR1999/InfoVisualizationFinal">
              <img src={imgPathGithub} alt="test" className="img" id="bot" />
            </a>{" "}
          </p>
        </ul>
      </div>
      <span dangerouslySetInnerHTML={template} className="svg" />
    </div>
  );
}

export default VastChallengeItem;
