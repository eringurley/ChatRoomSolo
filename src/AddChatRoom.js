import Component from '../Component.js';
import { auth, chatRef } from '../services/firebase.js';


class AddChatRoom extends Component {
    render() {
        const form = this.renderDOM();
        const addChat = this.props.addChat;

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const addChat = {
                id: chatRef.key,
                owner: auth.currentUser.uid,
                title: formData.get('chat');
            };

            form.reset();
            chatRef.set(addChat).then(() => {
            // reset the form
            });

        });
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <label>Chat Room<input name="chat-room"></label>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddChatRoom;