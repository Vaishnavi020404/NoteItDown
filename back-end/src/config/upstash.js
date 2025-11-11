import dotenv from "dotenv";
dotenv.config();

import pkg from "@upstash/ratelimit";
const { Ratelimit } = pkg;

import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),                
    limiter: Ratelimit.slidingWindow(50, "10 s")
, 
});
export default ratelimit;
