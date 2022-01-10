// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

import ListaNaus from './components/ListNaus/listnaus';

test('render content', ()=>{
    const lista = {
        content: 'this is a test',
        important: true
    }
    const component = render(<ListaNaus/>);

    console.log(component);
})
