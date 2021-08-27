import React from "react";

const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat: React.FC = () => {
  return (
    <div>
      <Messages />
      <AddMessageFormChat />
    </div>
  );
};

const Messages: React.FC = () => {
  return <div>Messages</div>;
};

const AddMessageFormChat: React.FC = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
