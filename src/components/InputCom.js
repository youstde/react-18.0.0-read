import { useState, useTransition } from 'react';


const InputCom = () => {
    const [val, setVal] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleInputChange = (e) => {
        setVal(e.target.value);
        startTransition(() => {
            const arr = [];
            for(let i = 0; i < 10000; i++) {
                arr.push(val);
            }
            setList(arr);
        });
    }

    return (
        <div>
            <input onChange={handleInputChange} />
            <div>
                {
                    isPending ? <div>loading...</div>: (
                        list.map(it => <div key={it}>{it}</div>)
                    )
                }
            </div>
        </div>
    )
}

export default InputCom;