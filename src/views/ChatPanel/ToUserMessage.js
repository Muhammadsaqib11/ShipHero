import React from 'react'
import moment from 'moment'

const userData = localStorage.getItem("userInfo");
const userInfo = JSON.parse(userData);

// console.log("userInfo", userInfo.id)

function ToUserMessage(props) {
	console.log("props", props)
    return (
			<div>
						<div className="chatCard-body msg_chatCard_body">
							
						<div className="d-flex justify-content-start mb-4">
							<div className="img_cont_msg">
								<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
							</div>
							{/* {console.log("content", props.data.content)} */}
							<div className="msg_cotainer">
								Hello
								{/* {props.data.content} */}
								{/* <span className="msg_time">{props && props.data && moment(props.data.created_at).format('LT')}</span> */}
								{/* <span className="msg_time">18 march 1991</span> */}

							</div>

						</div>
		
					</div>

		</div>
    )
}

export default ToUserMessage
