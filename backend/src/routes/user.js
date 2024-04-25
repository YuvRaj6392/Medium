import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { StatusCode, StatusCodeMessage } from "../constants/statusCodes";
import { signupSchema, signinSchema } from "@yuvraj6392/medium-common";
export const userRouter = new Hono();
userRouter.post("/signup", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const { success } = signupSchema.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Invalid input"
            });
        }
        const user = await prisma.author.create({
            data: {
                email: body.email,
                password: body.password,
            },
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt: token });
    }
    catch (err) {
        console.error("Error during signup:", err);
        c.status(StatusCode.InternalServerError);
        return c.json({ error: StatusCodeMessage.InternalServerError });
    }
});
userRouter.post("/signin", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const { success } = signinSchema.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Invalid input"
            });
        }
        const user = await prisma.author.findUnique({
            where: {
                email: body.email,
                password: body.password,
            },
        });
        if (!user) {
            c.status(StatusCode.NotFound);
            return c.json({ error: StatusCodeMessage.NotFound });
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
    }
    catch (err) {
        console.error("Error during signin:", err);
        c.status(StatusCode.InternalServerError);
        return c.json({ error: StatusCodeMessage.InternalServerError });
    }
});
