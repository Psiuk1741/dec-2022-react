import React, {useReducer, useState} from 'react';

const initialState = {cats: [], dogs: []};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, action.payload]};
        case 'ADD_DOG':
            return {...state, dogs: [...state.dogs, action.payload]};
        case 'REMOVE_CAT':
            return {...state, cats: state.cats.filter((_, index) => index !== action.payload)};
        case 'REMOVE_DOG':
            return {...state, dogs: state.dogs.filter((_, index) => index !== action.payload)};

        default:
            throw new Error();
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [newCatName, setNewCatName] = useState('');
    const [newDogName, setNewDogName] = useState('');

    function addCat(cat) {
        dispatch({type: 'ADD_CAT', payload: newCatName});
        setNewCatName('');
    }

    function addDog(dog) {
        dispatch({type: 'ADD_DOG', payload: newDogName});
        setNewDogName('');
    }

    function removeCat(index) {
        dispatch({type: 'REMOVE_CAT', payload: index});
    }

    function removeDog(index) {
        dispatch({type: 'REMOVE_DOG', payload: index});
    }

    return (
        <div>
            <input id="new-cat-name" type="text" value={newCatName} onChange={(e) => setNewCatName(e.target.value)}
            />
            <button onClick={addCat}>Add Cat</button>

            <input id="new-dog-name" type="text" value={newDogName} onChange={(e) => setNewDogName(e.target.value)}
            />
            <button onClick={addDog}>Add Dog</button>
            <h2>Cats:</h2>

            {state.cats.map((cat, index) => (
                <p key={index}>{cat}
                    <button onClick={() => removeCat(index)}>Видалити</button>
                </p>))}

            <h2>Dogs:</h2>

            {state.dogs.map((dog, index) => (
                <p key={index}>{dog}
                    <button onClick={() => removeDog(index)}>Видалити</button>
                </p>))}

        </div>
    );
};

export default Reducer;