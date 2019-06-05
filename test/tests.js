import './html-equal.js';
import { app } from '../src/services/firebase.js'; 
import './Profile.test.js';

QUnit.done(() => {
    app.delete();
}); 