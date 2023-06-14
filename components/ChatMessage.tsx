import React from 'react'
import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData;
};

function ChatMessage({ message }: Props) {

  return (
    <div>ChatMessage</div>
  );
};

export default ChatMessage;