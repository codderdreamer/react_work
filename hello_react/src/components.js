
class Header extends React.Component {
    render() {
        return (<h1>Hello React</h1>);
    }
}

class ToDo extends React.Component {
    render() {
        return (
            <div>
                <h1>ToDo Application</h1>
                <div>Lorem, ipsum dolor.</div>
            </div>
        )
    }
}

const template = <Header/>
const template2 = <ToDo/>
const template3 = (
    <div>
        <Header/>
        <ToDo/>
        <div>hello canim</div>
    </div>
)

ReactDOM.render(template3,document.getElementById('root'))