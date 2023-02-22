import mongoose from 'mongoose'

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  // Seed the database here
}
