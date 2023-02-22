# Seeding
Since we can't simply import our seed file into our index.js, as that would make it run every time we get a request, to see our app we will need a way to make sure our seed gets run only once. Vercel automatically runs build scripts on start, so we can take advantage of this to run our seed file.


## The Fix
> In the latest version of this template, this will already be setup for you.

1. Lets first add our build script. Add `"build": "node api/seed.js"`, under `scripts` in the `package.json`.
2. Add a seed file e.g. `touch api/seed.js`
3. Add this boilerplate to the seed.js

```js
import mongoose from 'mongoose'

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  // Seed the database here
}
```

4. All you need to do now is add to the seed function and import your required models/packages/data/jsons.
5. Lastly, you'll need to create an html file as vercel expects on at the end of the build script, so we can just do `touch public/index.html`.

> Why do we need an index.html file? Well the build script we're hooking into for our seeding is actually meant to be used to *build* a frontend application.

