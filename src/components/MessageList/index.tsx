import styles from './style.module.scss';
import { api } from '../../services/api';

import logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
};

const messagesQueue: Message[] =[];

const socket = io('http://localhost:4000')

socket.on('new_message', newMessage => {
    messagesQueue.push(newMessage);
})

export function MessageList(){

    const [messages, setMessages ] = useState<Message[]>([]);

    useEffect( () => {
        setInterval( () => {
            if(messagesQueue.length > 0){
                setMessages(prevState => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1]
                ].filter(Boolean))

                messagesQueue.shift()
            }
        },3000)
    }, []);

    useEffect(() => {
        // chamada para api
        api.get<Message[]>('/messages/getLast3').then(response => {
            setMessages(response.data)
        })
    },[]);

    return (
        <div className={styles.messageListWrapper}>
            <img src={logo} alt="Do while" />

            <ul className={styles.messageList}>

                {
                    messages.map( message => {
                        return (
                            <li key={message.id} className={styles.message}>
                                <p className={styles.messageContent}>
                                    {message.text}
                                </p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userImage}>
                                        <img src={message.user.avatar_url} alt={message.user.name} />
                                    </div>
                                    <span>{message.user.name}</span>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}