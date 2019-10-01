import Component from '../Component.js';
import { auth, chatRef } from '../services/firebase.js';


class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const chat = this.props.chat;

        const button = dom.querySelector('button');
        if(button) {
            button.addEventListener('click', () => {
                chatRef.child(chat.key).remove();
            });
        }

        return dom;
    }

    renderTemplate() {
        const chat = this.props.chat;
        const isOwner = auth.currentUser === chat.owner;
        const button = isOwner ? '<button>ⓧ</button>' : '';

        return /*html*/`
                <li>
                    <a href="./chat.html?key=${chat.key}">${chat.title}</a>
                    ${button}
                </li>
        `;
    }
}

export default ChatItem;