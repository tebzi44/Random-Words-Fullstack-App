import { useState, useEffect} from "react"
import axios from 'axios'

const GetRandomWords = ({routeChange}) => {
    const[wordsData, setWordsData] = useState([])
    const[word, setWord] = useState('')
    const[value, setValue] = useState('')
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get('http://localhost:3044/words')
            .then(res => res.data)
            .catch(err => console.log(err))
            setWordsData(result)
        }
        fetchData()
    },[])

    const changeWord = async ()=>{
        let random = Math.floor(Math.random() * wordsData.length)
        let randomWord = wordsData[random].word
        let randomValue = wordsData[random].value
        setWord(randomWord)
        setValue(randomValue)
    }

    return(
        <>
          <div className="center-div">
                 <div className="center-key">{word || 'როგორ ხარ ძმაკაცო?' }</div>
                 <div className="center-value">{value}</div>
             </div>
            <button 
                type="button" 
                className="next-btn"
                onClick={()=> changeWord()}
                >Next
            </button>
            <button className="add-btn" onClick={()=> routeChange('/add-words')}>add words</button>
        </>
    )
}
export default GetRandomWords