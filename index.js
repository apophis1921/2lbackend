require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitdata={
  "login": "apophis1921",
  "id": 250696799,
  "node_id": "U_kgDODvFUXw",
  "avatar_url": "https://avatars.githubusercontent.com/u/250696799?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/apophis1921",
  "html_url": "https://github.com/apophis1921",
  "followers_url": "https://api.github.com/users/apophis1921/followers",
  "following_url": "https://api.github.com/users/apophis1921/following{/other_user}",
  "gists_url": "https://api.github.com/users/apophis1921/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/apophis1921/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/apophis1921/subscriptions",
  "organizations_url": "https://api.github.com/users/apophis1921/orgs",
  "repos_url": "https://api.github.com/users/apophis1921/repos",
  "events_url": "https://api.github.com/users/apophis1921/events{/privacy}",
  "received_events_url": "https://api.github.com/users/apophis1921/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-12-20T12:59:58Z",
  "updated_at": "2025-12-20T12:59:58Z"
}

app.get('/github',(req,res)=>{
  res.json(gitdata)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('https://x.com/KingJames')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Can send various things other than just a string</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Sidemen charity match tomorrow evening<h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
