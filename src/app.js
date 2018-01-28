    class Header extends React.Component {
        //with React components we must define render
        render(){
            return (
                <div>
                    <h1>Indecision</h1>
                    <h2>Put your life in the hands of a computer.</h2>
                </div>
            );
        }
    }

    class Action extends React.Component {
        render(){
            return(
                <div>
                    <button>What should I do?</button>
                </div>
            );
        }
    }

    class Options extends React.Component {
        render(){
            return(
                <div> 
                    <ol>
                        <li>Options component here</li>
                    </ol>
                </div>
            );
        }
    }

    class AddOption extends React.Component {
        render(){
            return(
                <div>
                <form>
                    <input type="text"/>
                    <button>Add options</button>
                </form>
                </div>
            );
        }
    }

    const jsx = (
        <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));