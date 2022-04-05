import React from 'react'
import moment from 'moment'



const userData = localStorage.getItem("userInfo");
const userInfo = JSON.parse(userData);

// console.log("userInfo", userInfo.id)
function FromUserMessage(props) {
	// console.log("props1", props)
	// console.log("props", props.data &&props.data.from_user && props.data.from_user.id)
	// const createdDate= props.data.created_at;
	// const create_From =createdDate.format('MMM-DD-YYYY');
    return (
		<div>

			<div className="d-flex justify-content-end mb-4">
						<div className="msg_cotainer_send">
							{/* {props && props.data && props.data.content} */}
							hello
							
							{/* <span className="msg_time_send">{props && props.data && moment(props.data.created_at).format('LT')}</span> */}

							<span>saqib</span>
						</div>
						<div className="img_cont_msg">
			
						</div>
					</div>
		
	</div>
    )
}

export default FromUserMessage
