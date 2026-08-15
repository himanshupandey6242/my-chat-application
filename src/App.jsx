import React from 'react'
import { useState } from "react";
import users from './assets/user.json';
import './App.css'
import Nav_bar from './my_components/Nav_bar'
import Chat_box from './my_components/Chat_box'
import ChatScreen from './my_components/Chat_screen'

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <>
      <div className="container d-flex mt-3">

        {/* main chat area */}
        {selectedUser && (
          <div className="col-9 p-1 rounded" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
            <ChatScreen user={selectedUser} />
          </div>
        )}
         
{/* SEPRATOR */}

        {/* all chats */}
        <div className="col-3 rounded mx-1 chat-wrapper border shadow">
          <Nav_bar />
          <div className="chat-scroll">
            <Chat_box users={users} onSelectUser={setSelectedUser} />
          </div>
        </div>

      </div >
    </>
  )
}

export default App
