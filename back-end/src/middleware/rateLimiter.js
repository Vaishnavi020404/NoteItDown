import dotenv from "dotenv";
dotenv.config();

import pkg from "@upstash/ratelimit";
const { Ratelimit } = pkg;

import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(20, "10 s"), // 2 requests per 10 seconds
});

// Create middleware function
const rateLimiter = async (req, res, next) => {
    try {
        // Use IP address as identifier
        const identifier = req.ip || req.connection.remoteAddress || "anonymous";
        
        const { success, limit, reset, remaining } = await ratelimit.limit(identifier);

        // Set rate limit headers
        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader("X-RateLimit-Remaining", remaining);
        res.setHeader("X-RateLimit-Reset", reset);

        if (!success) {
            return res.status(429).json({
                error: "Too many requests",
                message: "Rate limit exceeded. Please try again later.",
                retryAfter: Math.ceil((reset - Date.now()) / 1000)
            });
        }

        next();
    } catch (error) {
        console.error("Rate limiter error:", error);
        // Allow request to continue if rate limiter fails
        next();
    }
};

export default rateLimiter;
