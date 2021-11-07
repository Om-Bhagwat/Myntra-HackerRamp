//React imports
import React ,{useEffect, useState}  from  "react";
import "./Chatbox.css";
import io from "socket.io-client";

// icon imports
import { FaTimes, FaPaperPlane, FaBan } from "react-icons/fa";

//connect Socket.io from websockets running on localhost:8000.
let socket;

const CONNECTION_PORT = "localhost:8000/";

const ChatBox = ({flagChatbox, toggleChatbox, roomId, name}) => {
    //hooks to store and display messages.
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [pj,setpj] = useState("");


    console.log(name);
    
    //hook to make a connection, send and receive message.
	useEffect(() => {
		socket = io(CONNECTION_PORT);
	}, [CONNECTION_PORT]);
	
	useEffect(() => {
		socket.emit("join_room", roomId);
        setpj(localStorage.getItem("phone_number"));
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
				phone: localStorage.getItem("phone_number"),
				message: message,
				time:today.getHours()+':'+today.getMinutes(),
			},
        };
    
        console.log(messageContent);
        await socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content]);
        setMessage("");
	};

    console.log(messageList);

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
                        <div>
                            {val.message}
                        </div>
                    )
                })}

                    {/* className={`${(val.phone===pj)?"sentM msg":"recievedM msg"}`} */}

                {/* <div className="sentM msg">
                    Look bro ! I found a pair of shoes that you aaa a a a might
                    like !
                    className={`${(val.phone===pj)?"sentM msg":"recievedM msg"}`}
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
