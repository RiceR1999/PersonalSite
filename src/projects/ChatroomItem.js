function ChatroomItem() {
  const imgPathGithub = "/images/githublogo.png";

  return (
    <div className="container container-fluid">
      <div className="jumbotron">
        <h1>UDP Chatroom</h1>
        <hr class="my-4"></hr>
        <p>
          Chatroom built using Python, uses UDP to send messages between a
          client to the server, the server then sends the message to all active
          clients, uses socket programming and incorporates multi threading on
          the client side
        </p>
        <hr class="my-4"></hr>
        <a href="https://github.com/RiceR1999/PiTwitterBot">
          <img src={imgPathGithub} alt="test" className="img" id="bot" />
        </a>
      </div>
    </div>
  );
}
export default ChatroomItem;
