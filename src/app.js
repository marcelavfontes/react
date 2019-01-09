    class IndecisionApp extends React.Component {
        render(){
            const title = "Indecision";
            const subtitle = "Put your life in the hands of a computer.";
            const options = ["one", "two", "three"];
            return(
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action />
                    <Options options={options}/>
                    <AddOption />
                </div>
            );
        }
    }

    class Header extends React.Component {
        //with React components we must define render
        render(){

            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            );
        }
    }

    class Action extends React.Component {
        handlePick() {
            alert('handlePick');
        }
        
        render(){
            return(
                <div>
                    <button onClick={this.handlePick}>What should I do?</button>
                </div>
            );
        }
    }

    class Options extends React.Component {
        //Bind in constructor to avoid rebinding in every render 
        //(could just call .bind(this) when calling hadleRemoveAll in render)
        constructor(props){
            super(props);
            //since constructor is not an event callback its context is correct, so we simply pass this
            this.handleRemoveAll = this.handleRemoveAll.bind(this);
        }

        //looses the context of props used in render. So we need to bind it.
        handleRemoveAll() {
            console.log(this.props.options);
        }
        render(){
            return(
                <div>  
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                </div>
            );
        }
    }

    class Option extends React.Component {
        render(){
            return(
                <div>
                    {this.props.optionText}
                </div>
            );
        }
    }

    class AddOption extends React.Component {
        handleAddOption(event){
            //prevents default form submission process -> prevents full page refresh
            event.preventDefault();

            //target = form element; we are going to go into its elements where we can fetch them by their name
            const option = event.target.elements.option.value.trim();

            if(option){
                alert(option);
            }
        }
        render(){
            return(
                <div>
                    <form onSubmit={this.handleAddOption}>
                        <input type="text" name="option" />
                        <button>Add options</button>
                    </form>
                </div>
            );
        }
    }

    ReactDOM.render(<IndecisionApp />, document.getElementById('app'));