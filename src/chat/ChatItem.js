import Component from '../Component.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <li class="chat-item">
                <h2>Chat List</h2>
                </li>
        `;
    }
}

export default ChatItem;