import React from 'react';
import ReactDOM from 'react-dom/client';

// const Parent = React.createElement('div', { id: 'parent' }, [
//     React.createElement('div', { id: 'child' }, [
//         React.createElement('h1', { id: 'h1' }, 'I am h1 tag'),
//         React.createElement('h2', { id: 'h2' }, 'I am h2 tag')
//     ]),
//     React.createElement('div', { id: 'child2' }, [
//         React.createElement('h1', { id: 'h1' }, 'I am hs1 tag'),
//         React.createElement('h2', { id: 'h2' }, 'I am h2 tag')
//     ])
// ]);
// this is when JSX comes

const heading = React.createElement(
    'h1',
    { id: 'heading' },
    'Hello world from react'
); //return object. react element using core react

console.log(heading)
const jsxheading = <h1>heading from jsx</h1>; // also return object nor,ally its react element
console.log(jsxheading)

const Title = () => <h1>Title</h1>


// React functional component // that return some jsx or react element
const HeadingComponent = () => {
    return (
        <>
            <Title />
            {Title()}
            <h1>Heading component</h1>
        </>
    );
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); //render convert object to html
root.render(<HeadingComponent />) // render like this 