import React ,{useEffect, useState}  from  "react";
import "./Chatbox.css";
import io from "socket.io-client";

// icon imports
import { FaTimes, FaPaperPlane, FaBan } from "react-icons/fa";


let socket;

const CONNECTION_PORT = "http://localhost:8000";

const ChatBox = ({flagChatbox, toggleChatbox}) => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    /*
	useEffect(() => {
		socket = io(CONNECTION_PORT);
	}, [CONNECTION_PORT]);
	
	useEffect(() => {
		socket.emit("joinroom", roomID);
	}, []);

	useEffect(()=>{
        socket.on("recieve_message",(data)=>{
            setMessageList([...messageList,data])
        })
    })

	const sendMessage = async () => {
        var today = new Date();
        let messageContent = {
			room: roomID,
			content: {
				author: userName,
				message: message,
				time:today.getHours()+':'+today.getMinutes(),
			},
        };
    
        await socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content]);
        setMessage("");
	};
*/

    return (
        <div id="chatbox" className="disable-sth">
            <div className="chatbox-head">
                <div className="user">
                    <span className="chat-pic"></span>
                    <span className="chat-name">Parth Bhardwaj</span>
                </div>
                <div className="chat-options">
                    <FaBan className="block" />
                    <FaTimes className="close-chat" onClick={toggleChatbox} />
                </div>
            </div>
            <div className="chatbox-body">
                <div className="sentM msg">
                    Look bro ! I found a pair of shoes that you aaa a a a might
                    like !
                </div>
                <div className="recievedM msg">Ohh... Thats great !</div>
                <div className="sentM msg">
                    Look bro ! I found a pair of shoes that you might like !
                </div>
                <div className="recievedM msg">Ohh... Thats great !</div>
                <div className="recievedM msg">
                    Look bro ! I found a pair of shoes that you might like !
                </div>
                <div className="recievedM msg">Ohh... Thats great !</div>
            </div>
            <div className="msgbox">
                <input
                    type="text"
                    name="msg"
                    id="msg-draft"
                    placeholder="Type Message here"
                />
                <FaPaperPlane id="send-msg-btn" />
            </div>
        </div>
    );
};

export default ChatBox;
