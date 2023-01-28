import axios from 'axios';
import { useState } from 'react';

const AddWords = ({routeChange}) => {
    const [word, setWord] = useState()
    const [value, setValue] = useState()

    const onSubmitFunction = (e) => {
        e.preventDefault()
        const postData = async () =>{
            await axios.post('http://localhost:3044/words',{
                word,
                value
            })
        }
        postData()
        
        setWord('')
        setValue('')
    }


    return(
        <>
            <div className="center-div-add-words" onSubmit={(e)=> onSubmitFunction(e)}>
                <form className="add-words-form">
                    <input 
                        type="text" placeholder="key" 
                        onChange={(e)=> setWord(e.target.value)}
                        value={word}
                    />
                    <input 
                        type="text"placeholder="value"
                        onChange={(e)=> setValue(e.target.value)}
                        value={value}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
            <button className="add-btn" onClick={() => routeChange('/')}>Back</button>
        </>
    )
}
export default AddWords