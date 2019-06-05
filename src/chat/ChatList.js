import Component from '../Component.js';
import ChatItem from './ChatItem.js';
// import { auth, chatRef } from '../services/firebase.js';


class ChatList extends Component {
    render() {
        const list = this.renderDOM();
        console.log(this.props)
        this.props.chat.forEach(chat => {
            const chatItem = new ChatItem({ chat });
            list.appendChild(chatItem.render());
        });

        // chatRef
        //     .child(auth.currentUser.uid)
        //     .on('value', snapshot => {
        //         const value = snapshot.val();
        //         const chat = value ? Object.values(value) : [];
        //         ChatList.update({ chat });
        //     });
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chat-list">hello</ul>
        `;
    }
}

export default ChatList;