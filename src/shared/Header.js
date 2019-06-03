import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';

class Header extends Component {
    render() {
        const dom = this.rendorDOM();
        const profile = new Profile();
        dom.appendChile(profile.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });
    }
    renderTemplate() {
        // const title = this.props.title || document.title;

        return /*html*/`
            <header>
                <h1>Hello World</h1>
            </header>
        `;
    }
}
export default Header;