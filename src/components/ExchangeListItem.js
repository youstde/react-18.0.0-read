import { useState, useEffect } from "react";


function ExchangeListItem() {
    const [list, setList] = useState(['A', 'B', 'C', 'D']);

    const disturbanceList = () => {
        const arr = Array.from(list);
        for (var i = 0; i < arr.length; i++) {
            const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
            [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
        }
        return arr;
    }

    const handleDomChange = () => {
        const draft = disturbanceList();
        setList(disturbanceList());
    }

    return (
        <div className="outContainer">
            <div className="parent">
                <div className="innerContainer">
                    <ul>
                        {
                            list.map(it => <li key={it}>{it}</li>)
                        }
                    </ul>
                    <div
                        className="child"
                        style={{ cursor: ' pointer' }}
                        id="child"
                        onClick={handleDomChange}
                    >
                        child
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExchangeListItem;
