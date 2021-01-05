const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knexfile = require('./knexfile')
const knex = require('knex')
const bcrypt =require('brcyptjs')
const saltRounds = 10

const app = express()

app.use(cors())
app.use(bodyParser())

app.post('/user/create', async function (request, response) {

    let existingUsersWithTheSameName = await knex('users').where('name', request.body.name)

    if(existingUsersWithTheSameName.length > 0){
        response.status(425).json({ message: 'A time traveller beat you to it '})
    }

    let hash = await bcrypt.hash(request.body.password, saltRounds)
    const newUser = {
        name: request.body.name,
        email: request.body.email,
        password: hash
    }
    let [ userId ] = await knex('users').insert(newUser)
    response.json({ name: newUser.name, id: userId })
});

app.post(`/user/:name`, async (request, response) => {
    const [ user ] = await knex.select('*').from('users').where('name', request.params.name)
    const match = await bcrypt.compare(request.body.password, user.password)
    if (match) {
        response.json(user)
    }
})

app.get('events', async function(req, res){
    const events = await knex.select('*').from('events').where('id', user.id)
    res.json(events)
})

app.post('events', async function(req, res){
    const newEvent = {
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        start: req.body.start,
        duration: req.body.duration,
        user_id: req.body.id
    }
    knex('events').insert(newEvent)
    res.json(newEvent)
})

app.listen('3000')