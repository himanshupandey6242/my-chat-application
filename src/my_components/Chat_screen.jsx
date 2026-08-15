// ChatScreen.jsx
function ChatScreen({ user }) {
  if (!user) return <div className="chat-screen" >
    {/* <h2 className=" d-flex justify-content-center align-items-center h-100 text-dark text-capitalize">
        welcome to the chat bot <br />
    </h2> */}
  </div>;

  return (
   <>

    <div className="chat-screen">
      {/* HEADER */}
      <div className="chat-header">
        <img src={user.img} className="chat-dp" />
        <h3>{user.name}</h3>
      </div>

      {/* MESSAGES */}
      <div className="chat-messages">
        {user.messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender === "me" ? "me" : "them"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>

    </div>
    </>
  );
}

export default ChatScreen;