import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';

import ListaNaus from '../components/ListNaus/listnaus';
import InfiniteScroll from 'react-infinite-scroll-component';
import Login from '../components/Login/login';


test('Muestra si se rendereiza Login', () =>{
    const login = render (<Login/>);
    login.getByPlaceholderText("Ingresa Nombre");

});

test('Muesta los textos en el componente ListaNaus', ()=>{
    
    render(<ListaNaus/>);
    const title = screen.getByText('HOME');
    expect(title).toBeInTheDocument();
});


// test('infinite', () => {

//     render(<InfiniteScroll dataLength={1}/>);
//     screen.debug();
//     // const jedi = screen.findByText('wing');
//     // expect(jedi).toBeInTheDocument();
// });

