import RobotProfileIhoto from '../assets/robot-solid.svg';
import UserProfilePhoto from '../assets/circle-user-solid.svg';
import './ChatMessage.css';
export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }
  */

  return (
    <div className={sender === 'user'?'chat-message-user':'chat-message-robot'}>
      {sender === 'robot' && (
        <img src={RobotProfileIhoto} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfilePhoto}  className="chat-message-profile"/>
      )}
    </div>
  );
}