import React from "react";
import "./Chatbox.css";

// icon imports
import { FaTimes, FaPaperPlane, FaBan } from "react-icons/fa";

const ChatBox = ({flagChatbox, toggleChatbox}) => {
    return (
	<div id="chatbox" className="disable-sth">
		<div className="chatbox-head">
			<div className="user">
				<span className="chat-pic"></span>
				<span className="chat-name">
					Parth Bhardwaj
				</span>
			</div>
			<div className="chat-options">
				<FaBan className="block"/>
				<FaTimes className="close-chat" onClick={toggleChatbox}/>
			</div>
		</div>
		<div className="chatbox-body">
			<div className="sentM msg">
				Look bro ! I found a pair of shoes that you aaa a a a might like !
			</div>
			<div className="recievedM msg">
				Ohh... Thats great !
			</div>
			<div className="sentM msg">
				Look bro ! I found a pair of shoes that you might like !
			</div>
			<div className="recievedM msg">
				Ohh... Thats great !
			</div>
			<div className="recievedM msg">
				Look bro ! I found a pair of shoes that you might like !
			</div>
			<div className="recievedM msg">
				Ohh... Thats great !
			</div>
		</div>
		<div className="msgbox">
			<input type="text" name="msg" id="msg-draft" placeholder="Type Message here"/>
			<FaPaperPlane id="send-msg-btn"/>
		</div>
	</div>
	);
};

export default ChatBox;
