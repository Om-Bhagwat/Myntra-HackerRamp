import React ,{useEffect, useState}  from  "react";
import "./Chatbox.css";
import io from "socket.io-client";

// icon imports
import { FaTimes, FaPaperPlane, FaBan } from "react-icons/fa";


let socket;

const CONNECTION_PORT = "localhost:8000/";

const ChatBox = ({flagChatbox, toggleChatbox, roomId, name}) => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
	useEffect(() => {
		socket = io(CONNECTION_PORT);
	}, [CONNECTION_PORT]);
	
	useEffect(() => {
		socket.emit("join_room", roomId);
	}, []);

	useEffect(()=>{
        socket.on("recieve_message",(data)=>{
            console.log(data);
            setMessageList([...messageList,data])
        })
    })
    console.log(messageList);
	const sendMessage = async () => {
        var today = new Date();
        let messageContent = {
			room: roomId,
			content: {
				author: name,
				message: message,
				time:today.getHours()+':'+today.getMinutes(),
			},
        };
    
        console.log(messageContent);
        await socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content]);
        setMessage("");
	};

    //console.log(messageList);

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
                {messageList.map((val,key)=>{
                    return(
                        <div className={`${(val.author===name)?"sentM msg":"recievedM msg"}`}>
                            {val.message}
                        </div>
                    )
                })}
                {/* <div className="sentM msg">
                    Look bro ! I found a pair of shoes that you aaa a a a might
                    like !
                </div>
                <div className="recievedM msg">Ohh... Thats great !</div> */}
            </div>
            <div className="msgbox">
                <input
                    type="text"
                    name="msg"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    id="msg-draft"
                    placeholder="Type Message here"
                />
                <FaPaperPlane id="send-msg-btn" onClick={sendMessage} />
            </div>
        </div>
    );
};

export default ChatBox;
