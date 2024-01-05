import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("User List");
});

router.get('/new', (req, res) => {
    res.send("User New Form");
});

router.post('/', (req, res) => {
    res.send('Create User')
})

// Dynamic routes should be placed at the bottom

/*
router.get('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})
*/

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{name: "Kyle"}, {name: "Sally"}]

router.param("id", (req, res, next, id)=>{
    // console.log(id)
    req.user = users[id]
    next()
})

// param is kind of middleware. Middleware inide express is stuff that runs between request being sent to your server and actual response being sent to the user

export default router;
