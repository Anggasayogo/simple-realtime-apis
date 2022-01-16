import express from 'express'
import {io} from '../index' 

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // const orders = await Order.find()
    res.status(200).send({
        message: 'hello'
    })
  } catch (error) {
    res.send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const order = req.body
    io.emit('order-added', order)
    res.status(201).send(order)
  } catch (error) {
    res.send(error)
  }
})

export default router