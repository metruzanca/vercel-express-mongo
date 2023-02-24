import 'dotenv/config'
import mongoose from 'mongoose'

if (process.env.DATABASE_URL === undefined) {
  process.exit()
}

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  // Seed the database here
}
