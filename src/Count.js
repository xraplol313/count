import React, { useState, useEffect } from 'react';
import './Count.css';

function Count(props) {
    const [count, setCount] = useState(0);

    let dataFilter = () => {
        let randomKey = Math.floor(Math.random() * (Object.keys(props.data).length) + 0);
        let oneUserData = props.data[randomKey].commit.author.date;
        let text = document.querySelector('.count-text-1');
        text.innerText = oneUserData;
    }

    return (
        <div className='count-wrapper'>
            <p className='count-text'>Вы кликнули {count} раз(а)</p>
            <button className='count-btn' onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
            <button className='count-btn' onClick={dataFilter}>Кнопка Date</button>
            <p className='count-text count-text-1'> Рандом айди</p>
        </div>
    );
}

export default Count;
