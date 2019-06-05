import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {
    render() {
        const list = this.renderDOM();

        this.props.chat.forEach(chat => {
            const chatItem = new ChatItem({ chat });
            list.appendChild(chatItem.render());
        });
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chat-list"></ul>
        `;
    }
}

export default ChatList;