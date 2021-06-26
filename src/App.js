import React, { useEffect, useState } from "react"
import {FormControl, Input, InputLabel, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send' ;


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("")
  // console.log(input)

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id , message : doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter username"));
  }, [])

  const sendMessage =(event) => {
    event.preventDefault();// as soon as we include form,it refreshes therefore we prevent refresh
    db.collection('messages').add({
      username :username,
      text:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages,{username: username, text :input}]);
    setInput('')
    
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="facebook-messenger" />
      <h1>Facebook Messenger App</h1>
      
      <form className="app_form">
      <FormControl className="app_formcontrol">
        <InputLabel>Type a message</InputLabel>
        <Input className="app_input" value={input} onChange ={(event) => setInput(event.target.value)} />
        <IconButton className="app_inputbutton" disabled={!input} type="submit" color="primary" onClick={sendMessage}> 
          <SendIcon />
        </IconButton>

        {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send</Button> */}
      </FormControl>

      </form>
      
      <FlipMove>
        {messages.map(({id,message}) => (
          <Message key={id} message={message} username={username}/>
        ))}

      </FlipMove>

    </div>
  );
}

export default App;
