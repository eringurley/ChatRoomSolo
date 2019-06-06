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

        const main = dom.querySelector('main');
        
        const header = new Header({ title: 'Welcome to chats' });
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const chatList = new ChatList({ chats: [] });
        const chatListDOM = chatList.render();
        main.appendChild(chatListDOM);

        const addChatRoom = new AddChatRoom({ chats: [] });
        const addChatDOM = addChatRoom.render();
        main.appendChild(addChatDOM);

        //fetch
        chatRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chats = value ? Object.values(value) : [];
                console.log(chats);
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
export default App;