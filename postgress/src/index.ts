import { Client } from "pg";


const client = new Client({
  connectionString: "postgresql://manavbehera123:S8WCaEvx1Xhs@ep-misty-hill-a1w20ucl.ap-southeast-1.aws.neon.tech/practise?sslmode=require"
})



async function CreateUser() {
  await client.connect();
  const newUser = await client.query(`CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL ,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
  `)
  console.log(newUser);

}

CreateUser();