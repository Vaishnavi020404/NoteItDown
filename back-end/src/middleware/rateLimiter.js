import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later",
            });
        }

        next(); // call the next middleware or route
    } catch (error) {
        console.log("Rate limit error:", error);
        next(error); // pass error to Express error handler
    }
};

export default rateLimiter;
