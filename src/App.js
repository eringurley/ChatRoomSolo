import Component from './Component.js';
import Header from './shared/Header.js';
import ChatList from '../src/chat/ChatList.js';
import { chatRef } from './services/firebase.js';
import AddChatRoom from './AddChatRoom.js';

class App extends Component {

    //in app where rendering lists, feed it an empty array and the value needs to match 
//chat list passing same line of props, use that to for Each
//rendertemplate, bring in signular prop and need to pass it singular, then interpolating

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Welcome to Chats' });
        const headerDOM = header.render();
        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const chatList = new ChatList({ chat: [] });
        const chatListDOM = chatList.renderDOM();
        main.appendChild(chatListDOM);

        const addChat = new AddChatRoom({ chat: [] });
        const addChatDOM = addChat.renderDOM();
        main.appendChild(addChatDOM);

        //fetch
        chatRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chat = value ? Object.values(value) : [];
                console.log(chat);
                chatList.update({ chat });
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
export default App;