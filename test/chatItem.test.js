import ChatItem from '../src/chat/ChatItem.js';
const test = QUnit.test;
QUnit.module('Chat Item component');

test('reders remplate from chat object', assert => {
    const chat = {};
    const chatItem = new ChatItem({ chat });

    const expected = /*html*/ `
        <li>
            <a href="./chat.html?key=${chat.key}">${chat.name}</a>
        </li>
    `;

    const html = chatItem.renderTemplate();

    // Assert
    assert.htmlEqual(html, expected);

});