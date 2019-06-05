import Component from './Component.js';
import Header from './shared/Header.js';
import ChatList from '../src/chat/ChatList.js';
import { chatRef } from './services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Welcome to Chats' });
        const headerDOM = header.render();
        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const chatList = new ChatList();
        const chatListDOM = chatList.renderDOM();
        main.appendChild(chatListDOM);

        //fetch
        chatRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chat = value ? Object.values(value) : [];
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