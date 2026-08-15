
function Chat_box({ users, onSelectUser }) {
    return (
        <>
            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="150">
                {users.map((user, idx) => (
                    <div
                        key={user.id}
                        className="chat-item mt-3 border"
                        onClick={() => onSelectUser(user)}
                    >

                        <img src={user.img} alt="dp" className="chat-dp" />

                        <div className="chat-info">
                            <h4 className="chat-name">{user.name}</h4>
                            <p className="chat-message">
                                {user.messages[user.messages.length - 1].text}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </>
    );
}

export default Chat_box;