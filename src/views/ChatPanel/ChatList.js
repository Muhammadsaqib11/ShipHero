import React from "react";
import "./ChatList.css";
// import avatar from "../../Assets/Img/avatars/Abbot.jpg";

function ChatList(props) {
    console.log("chats", props.chat)
    return (
        <div>
            <p style={{ marginTop:'10%'}}>{props && props.chat}</p>
        </div>
    )
}

export default ChatList




















// export default ({ chats }) => (
    
//   <ul style={{marginTop:"8%"}}>
//     {chats.map(chat => {
//       return (
     
//         <div>
//       { console.log("chats", chats)}
              
//               <div className="chatMessage">
//                 <div key={chat.id} className="box">
//                   <p>
//                   </p>
//                   <p>{chat.content}</p>
//                 </div>

//                 <div className="imageHolder">
//                 <img src={avatar} className="img-responsive avatar" alt="logo" />
//               </div>
//               </div>
       
//         </div>
//       );
//     })}
//   </ul>
// );
