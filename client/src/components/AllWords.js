import axios from "axios"
import { useEffect, useState } from "react"

const AllWords = ({routeChange})=> {
    const[wordsData, setWordsData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get('http://localhost:3044/words')
            .then(res => res.data)
            .catch(err => console.log(err))
            setWordsData(result)
        }
        fetchData()
    },[])

    const deleteWordFun = async (id) => {
        await axios.delete(`http://localhost:3044/words/${id}`)
        window.location.reload(false);
    }

    return(
        <>
            <div className='allWords-wrapper'>
                {(wordsData.length?wordsData.map(item => {
                    return(
                    <div key={item.id} className='word-panel'>
                        <div className="allWords-word-wrapper">
                            <span className="allWords-key">{item.word }</span>
                            <span className="allWords-value">{item.value }</span>
                        </div>
                        <div className="allWords-button-wrapper">
                            {/* <button onClick={}>Edit</button> */}
                            <button onClick={()=> deleteWordFun(item.id)}>Delete</button>
                        </div>
                    </div>
                    )
                }):[])}
            </div>
            <button className="routing-left-side-btn" onClick={() => routeChange('/')}>Back</button>
            <button className="routing-right-side-btn" onClick={()=> routeChange('/add-words')}>add words</button>
        </>
    )
}

export default AllWords