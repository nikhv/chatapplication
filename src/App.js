import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import  ChatFeed from './components/ChatFeed' 
import './App.css';

function App(){
     if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <>
            <ChatEngine
               height="100vh"
               projectID="2e1b566f-a84d-402a-b4c7-602e56ef8260"
               userName={localStorage.getItem('username')}
               userSecret={localStorage.getItem('password')}
               renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
               
            />
        </>
    );
}
export default App;
