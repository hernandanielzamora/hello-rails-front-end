import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/messagesSlice';

const Message = () => {
  const dispatch = useDispatch();
  const messageText = useSelector((state) => state.messages);
  console.log(messageText.messages.text);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
      <h1>A new message will appear every time you refresh!</h1>
      <h3>{messageText.messages.text}</h3>
    </div>
  );
};

export default Message