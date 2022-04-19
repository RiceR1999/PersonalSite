import styles from "./Project.module.css";

function BotItem() {
  const imgPathGithub = "/images/githublogo.png";
  const imgPathTwitter = "/images/twitterlogo.png";
  return (
    <div className="container container-fluid">
      <div className="jumbotron">
        <h1>Pi Twitter Bot</h1>
        <hr class="my-4"></hr>
        <p>
          A small twitter bot used to repost top posts on particular subreddits,
          built using Python, PRAW, and the Twitter API, running on Raspberry Pi
        </p>
        <hr class="my-4"></hr>
        <a
          className="align-left"
          href="https://github.com/RiceR1999/PiTwitterBot"
        >
          <img src={imgPathGithub} alt="test" className="img" id="bot" />
          <a className="align-right" href="https://twitter.com/poliBot101">
            <img src={imgPathTwitter} alt="test" className="img" id="bot" />
          </a>
        </a>
      </div>
    </div>
  );
}
export default BotItem;
