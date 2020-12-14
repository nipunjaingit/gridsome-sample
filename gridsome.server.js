// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    try {
      let response = await axios.get('https://dummyapi.io/data/api/post', {
        headers: {
          'app-id': '5fd73f67fb5a6736454e2b91'
        }
      })
      
      const collection = actions.addCollection({
        typeName: 'Post'
      })
      response.data.data.forEach(post => {
        collection.addNode({
          id: post.id,
          context: {
            data: post
          }
        })
      })
    } catch (err) {
      console.log(err)
    }
  })

  api.createPages(async ({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    try {
      let response = await axios.get('https://dummyapi.io/data/api/post', {
        headers: {
          'app-id': '5fd73f67fb5a6736454e2b91'
        }
      })
      response.data.data.forEach(post => {
        createPage({
          path: `/post/${post.id}`,
          component: 'src/templates/Post.vue',
          context: {
            data: post
          }
        })
      })
    } catch (err) {
      console.log(err)
    }
  })
}
