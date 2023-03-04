import { useState, useTransition } from 'react';

function MoreList() {
    const [liList, setLiList] = useState([]);
    const [book, setBook] = useState([]);
    const [panding, starTransition] = useTransition();

    const handleSyncClick = (e) => {
        setBook(e.target.value);
    }

    const handleClick = () => {
        starTransition(() => {
            const arr = [];
            for (let i = 0; i < 50000; i++) {
                arr.push(i);
            }
            setLiList([...arr]);
        });
    }

    return (
        <div>
            <input onChange={handleSyncClick} />
            <button onClick={handleClick}>click</button>
            <h2>book:</h2>
            <div>{book}</div>
            <h2>list:</h2>
            <div>
                {liList.map(it => <div key={it}>{it}</div>)}
            </div>
        </div>
    )
}

export default MoreList;