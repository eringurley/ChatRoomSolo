import { app } from '../src/services/firebase.js';
import './html-equal.js';
import './Profile.test.js';
import './chatItem.test.js';

QUnit.done(() => {
    app.delete();
});