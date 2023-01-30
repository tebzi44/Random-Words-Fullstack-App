const router = require('express').Router()
const Words = require('../db/models/Words')

router.get('/', async (req, res)=>{
    const getAllWords = async () => {
        const data = await Words.findAll({
            attributes: ['id','word', 'value'],
            // where: {
            //     deletedAt: null
            // }
        })
        if(data.length){
            return data 
        }
        return {message:'data is empty'}
    }
    res.json(await getAllWords())
})

router.post('/', async (req, res) => {
    try {
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
        res.status(200).json({message: 'added successfuly'})
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const data = await Words.destroy({
            where: {id}
        })
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

module.exports = router