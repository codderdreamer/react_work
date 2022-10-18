// JSX - Javascript XML

var root = document.getElementById('root');

//_________________________________________________________________________________________________

var template = <div>
                    <h1 id="header">Hello World</h1>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>;

var name = "Samsung 510";
var price = 5000;
var description = "iyi bir telefon"
//_________________________________________________________________________________________________

var product =   {
                    // name : "Samsung 510",
                    price : 1000,
                    description : "iyi",
                    types : ['red','blue']
                }

function formatPrice(p) {
    return p.price + 'TL';
}

function getDescription(description){
    if(description){
        return <p id="product-desc">description: {description}</p>;
    }
    else{
        return 'no description'
    }
}

var template2 = (
    <div id="product-details">
        <h2 id="product-name">name: {product.name ? product.name:'no name'}</h2>
        <p id="pruduct-price">price: {product.price==0?'free':product.price}</p>
        {(product.price && product.price>0) && <p>price: {product.price} TL</p> }
        {getDescription(product.description)}
        <p>{product.types.length>0?'there are options':'no options'}</p>
    </div>
);

//_________________________________________________________________________________________________

var number = 0;

var btnAddClassName = "btnGreen"
var btnMinusClassName = "btnRed"

function addOne() {
    number++
    renderApp();
    console.log('add one')
}

function minusOne() {
    number--
    renderApp();
    console.log('minus one')
}

var minusOneArrowFunc = () => {
    console.log('minus one arrow')
}



function renderApp() {
    var template3 = (
        <div>
            <h1>Number: {number}</h1>
            <button id="btnPlusOne" className={btnAddClassName} onClick={addOne}>+1</button>
            <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}>-1</button>
        </div>
    )
    
    ReactDOM.render(template3,root)
}

//_________________________________________________________________________________________________

function tick() {
    var element = (
        <div>
            <h2>time is: {new Date().toLocaleTimeString()}</h2>
        </div>
    )

    ReactDOM.render(element,root)
}

setInterval(() => {
    tick()
}, 1000);








