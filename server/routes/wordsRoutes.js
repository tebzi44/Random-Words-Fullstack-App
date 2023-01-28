const router = require('express').Router()
const Words = require('../db/models/Words')

router.get('/', async (req, res)=>{
    const getAllWords = async () => {
        const data = await Words.findAll({
            attributes: ['id','word', 'value'],
            where: {
                deletedAt: null
            }
        })
        if(data.length){
            return data 
        }
        return {message:'data is empty'}
    }
    res.json(await getAllWords())
})



router.post('/', async (req, res) => {
    const { word, value } = req.body 

    if(!word || !value) {
        res.json({message: 'input is empty'})
        return
    }

    const addWord = async () => {
        await Words.create({
            word,
            value,
        })
    }
    await addWord()
    res.json({message: 'added successfuly'})
})





router.delete('/', async (req, res)=>{
})

module.exports = router