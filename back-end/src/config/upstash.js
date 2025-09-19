// Load environment variables
import dotenv from "dotenv";
dotenv.config(); // MUST be at the top

//  Import RateLimit correctly from CommonJS package
import pkg from "@upstash/ratelimit";
const { Ratelimit } = pkg;

import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),                 // uses .env variables
    limiter: Ratelimit.slidingWindow(5, "10 s"), // 10 requests per 20 seconds
});

export default ratelimit;
