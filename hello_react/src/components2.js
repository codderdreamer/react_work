class ToDoApp extends React.Component {
    render() {
        const app = {
            title: "Todo Application",
            description: "Lorem, ipsum.",
            items: ['item 1', 'item 2']
        }


        return (
            <div>
                <Header title={app.title} descirption={app.description} />
                <ToDoList items={app.items} />
                <Add items={app.items}/>
                <Action/>
            </div>
        )
    }
}

console.log(React.Component);

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.descirption}</div>
            </div>
        )
    }
}

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.clearItems = this.clearItems.bind(this)
    }
    clearItems(){
        console.log(this.props.items)
        console.log('clear items');
    }
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, index) =>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        )
    }
}


class Add extends React.Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this)
    }
    addItem(){
        console.log("add");
        this.props.items.push("item")
        console.log(this.props.items)
    }
    render() {
        return (
            <button onClick={this.addItem}>Add a list</button>
        )
    }
}

class Action extends React.Component {
    onFormSubmit(e){
        e.preventDefault(); //sayfanın tekrar yenilenme özelliğini kapatır

        const item = e.target.elements.txtItem.value.trim();
        if (item)
        {
            console.log(item)
        }
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        )
    }
}

const template = <ToDoApp />

ReactDOM.render(template, document.getElementById('root'))


