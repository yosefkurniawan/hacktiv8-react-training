import React, { useState } from 'react';

function Simpleform() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('default description...');
    const [gender, setGender] = useState('L');
    const [hobby, setHobby] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`
            Form was submitted...
            Name: ${name} \n
            Description: ${description} \n
            Gender: ${gender} \n
            Hobby: ${hobby} \n
        `);
    }

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangeDescription(event) {
        setDescription(event.target.value);
    }

    function handleChangeGender(event) {
        setGender(event.target.value);
    }

    function handleChangeHobby(event) {
        setHobby([Array.from(event.target.selectedOptions, (item) => item.value)]);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label><br />
                    <input type="text" onChange={handleChangeName} value={name} name="name" />
                </div>
                <div>
                    <label htmlFor="description">Description: </label><br />
                    <textarea onChange={handleChangeDescription} value={description} name="description" />
                </div>
                <div>
                    <label htmlFor="gender">Gender: </label><br />
                    <select onChange={handleChangeGender} value={gender} name="gender">
                        <option value="L">Laki-laki</option>
                        <option value="W">Wanita</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="hobby">Hobby: </label><br />
                    <select onChange={handleChangeHobby} name="hobby" multiple={true} >
                        <option value="coding">Coding</option>
                        <option value="futsal">Futsal</option>
                        <option value="lari">Lari</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Simpleform;
