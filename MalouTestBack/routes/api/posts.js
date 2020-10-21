var router = require('express').Router();
const axios = require('axios')
const { getToken } = require('../../auth')

// return a list of tags
router.get('/:date', async function (req, res, next) {
    var token = await getToken();
    let date = req.params.date;

    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    let data = {
        "query": `query { posts(postedAfter: \"${date}\",postedBefore: \"${date}\") { edges { node { name, description,thumbnail,{url} } } } }`
    }

    await axios
        .post('https://api.producthunt.com/v2/api/graphql', data, config)
        .then(response => {
            return res.status(200).json(response.data.data.posts.edges);
        })
        .catch(error => {
            console.error(error)
        })

});

module.exports = router;

