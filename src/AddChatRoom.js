import Component from './Component.js';
import { auth, chatRef } from './services/firebase.js';


class AddChatRoom extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const chatsRef = chatRef.push();

            //set the data of new ref node:
            chatsRef.set({
                key: chatRef.key,
                title: input.value,
                owner: auth.currentUser.uid,
            })
                .then(() => {
                    form.reset();
                });
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input required>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddChatRoom;