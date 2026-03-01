import {Pool} from "pg";

const pool = new Pool({
  connectionString: process.env.PSQLURL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;