import React from "react";
import { Link } from "react-router-dom";
import './history.css';
import { useSelector } from 'react-redux';

export default function History() {
    const history = useSelector((state) => state.history.history);

    return (
        <div className="history">
            <h1>Searched History</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <Link to={`/history/${item.word}`}>{item.word}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
