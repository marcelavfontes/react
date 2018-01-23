console.log('App.js is running!');

const app = {
    title: 'Visibility App',
    isVisible: false,
    hiddenMessage: ['Visible! glu glu yeah yeah!','Black cat malicious! WEEON!']
}

const onChangeFlag = () => {
    app.isVisible = !app.isVisible; 
    renderApp();
}

function fetchRandomIndex() {
    return Math.floor(Math.random() * app.hiddenMessage.length);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onChangeFlag}>
                {app.isVisible ? 'Click to turn invisible... \'o\'' : 'Click to turn visible... ' }
            </button>
            {app.isVisible && (
            <div>
                <p>{app.hiddenMessage[fetchRandomIndex()]}</p>
            </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();