import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function WordDetails() {
    const { word } = useParams();
    const history = useSelector((state) => state.history.history);
    const selectedWord = history.find(item => item.word === word);

    return (
        <div className="word-details">
            <h1>{selectedWord.word}</h1>
            <p>{selectedWord.definition}</p>
            {/* Add the rest of your word details display here */}
        </div>
    );
}
