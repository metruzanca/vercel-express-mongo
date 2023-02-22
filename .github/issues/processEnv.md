# `process.env.DATABASE_URL` ts error

The `DATABASE_URL` is not guaranteed to be a string, so without typescript theres no way to tell js that its actually always a string in our scenario.

## The fixes

Either
```js
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
```

or 
```js
mongoose.connect(process.env.DATABASE_URL || '')
```

will silence the error.

> Neither are technically "solutions". The actually solution involves a `environment.d.ts` file but that will do nothing unless we also have a `tsconfig.json` file and are using typescript in our project.

