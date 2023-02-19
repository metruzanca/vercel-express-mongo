# Deploying Expressjs to Vercel

<!-- TODO requirements -->
- api folder
- export default app
- base route needs to be /api

## Environment Variables
<!-- TODO database connection string -->


### Setting up [Vercel](v-signup) Account

I would recommend using the `Continue with github` option as it will auto connect your github to vercel. Security wise, you'll also just need to keep your github locked down and won't have to worry about vercel. (_You should have 2FA enabled on github_)


## Using Vercel for Express deployments

> Note!: When express is running on vercel, it is running in a serverless environment which makes this deployment not suitable for things like websockets or other long-lasting / stateful backends.

> Note!: You cannot host a database on vercel, meaning you'll be relagated to something like [MongoDB Atlas](mongodb-atlas), [Firebase](firebase), [supabase](supabase) which all have free tiers or some other paid database option.



To get up and running with express on vercel, you've got 3 options:
- Click on the [![use this template][template]][generate] button (here or in top right)
- Use a tool like [degit](degit) (`npx degit metruzanca/ga-vercel-demo`)
- Copy this repo's file structure.

### Vercel Requirements
Expressjs will not run unless the following requirements are met:
- There must be an `api/` folder in the root...
- ...with an `index.js` file inside...
- ...that contains `export default app` (or `module.exports = app`)...
- ...the base route needs to be `/api/`.

If all these requirements are met, you can use all the expressjs ergonomics you're used to.

However, heres a few more things to make sure you do:
- **Don't** run `app.listen` in your index.js file as Vercel will do that for you. Running app.listen will cause your serverless instance to to timeout (which will get vercel angry with you)
- **Do** close any database connections you open e.g. if you are using `mongoose`, you need to disconnect after the handler.
  - To make this part easier, I made a middleware [`api/lib/cleanup.js`](./api/lib/cleanup.js)

### Adding the project to Vercel

The process could not be easier.

Heres a gif showing the 4 clicks you need to do.

[](./assets/add-vercel-project.gif)


---

### Resources
- [Vercel Expressjs docs](v-express)
- [Adding a frontend](v-frontend)
- [Adding websockets](realtime) (Ably has a great free tier)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

[v-express]: https://vercel.com/guides/using-express-with-vercel#standalone-express
[v-frontend]: https://vercel.com/guides/using-express-with-vercel#adding-a-public-directory
[realtime]: https://vercel.com/guides/publish-and-subscribe-to-realtime-data-on-vercel

### Q&A

**Why is this on my public github and not on the private General Assembly Github Enterprise?**

Simple. Vercel doesn't support GH enterprise.

<!-- Free Database Options -->
[firebase]: https://firebase.google.com/
[supabase]: https://supabase.com/
[mongodb-atlas]: https://www.mongodb.com/atlas/database

<!-- Vercel -->
[v-signup]: https://vercel.com/signup

<!-- Using this repo -->
[template]: https://custom-icon-badges.demolab.com/badge/-Use%20Template-238636?style=for-the-badge&logo=repo-template&logoColor=white
[generate]: https://github.com/metruzanca/ga-vercel-demo/generate
[degit]: https://github.com/Rich-Harris/degit
