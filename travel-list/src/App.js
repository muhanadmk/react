import './index.css';

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: true},
    {id: 3, description: "Charger", quantity: 1, packed: false},
];

export default function App() {
    return (
        <div className='app'>
            <Logo/>
            <Form/>
            <PakingList/>
            <Stats/>
        </div>
    )
}

function Logo() {
    return (
        <h1> Far Away</h1>
    );
}

function Form() {
    function handleSumbit(){

    }
    return (
        <form className="add-form" onSubmit={handleSumbit}>
            <h3>What you need for your trip ?</h3>
            <select>
                {
                    Array.from({length: 20}, (_, i) => i + 1)
                        .map(item => (<option value={item} key={item}>{item}</option>))
                }
            </select>
            <input type='text' placeholder='Itme...'/>
            <button>Add</button>
        </form>
    );
}


function Item({item}) {
    return (
        <li style={item.packed ? {textDecoration: 'line-through'} : {}}>
            <span>{item.quantity} {item.description}</span>
            <button>&times;</button>
        </li>
    );
}

function PakingList() {
    return (
        <div>
            <ul className='list'>
                {initialItems.map(item => <Item item={item} key={item.id}/>)}
            </ul>
        </div>

    );
}

function Stats() {
    return (
        <footer className='stats'>
            <em>You have X in your list, and you already packed X(%)</em>
        </footer>
    );
}





