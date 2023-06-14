import React from 'react'

type Props = {
    chatId: string;
};

const ChatWindow = ({ chatId }: Props) => {
  return (
    <div className='flex-1'>ChatWindow</div>
  );
};

export default ChatWindow;