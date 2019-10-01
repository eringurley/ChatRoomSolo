import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from './ChatList.js';
import { chatRef } from '../services/firebase.js';
import AddChatRoom from '../AddChatRoom.js';

class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Welcome to Chats' });
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        const chatList = new ChatList({ chats: [] });

        const chatListDOM = chatList.render();
        main.appendChild(chatListDOM);

        const addChatRoom = new AddChatRoom({ });
        const addChatDOM = addChatRoom.render();
        main.appendChild(addChatDOM);
        

        //fetch
        chatRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chats = value ? Object.values(value) : [];
                chatList.update({ chats });
            });


        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}
export default ChatApp;