const Parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', { id: 'h1' }, 'I am h1 tag'),
        React.createElement('h2', { id: 'h2' }, 'I am h2 tag')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', { id: 'h1' }, 'I am h1 tag'),
        React.createElement('h2', { id: 'h2' }, 'I am h2 tag')
    ])
]);
// this is when JSX comes

console.log(Parent);
// const heading = React.createElement(
//     'h1',
//     { id: 'heading' },
//     'Hello world from react'
// ); //return object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parent); //render convert object to html