import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { StatusCode, StatusCodeMessage } from "../constants/statusCodes";
export const bookRouter = new Hono();
bookRouter.use(async (c, next) => {
    const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(StatusCode.Unauthorized);
        return c.json({ error: StatusCodeMessage.Unauthorized });
    }
    const payload = await verify(jwt, c.env.JWT_SECRET);
    if (!payload) {
        c.status(StatusCode.Unauthorized);
        return c.json({ error: StatusCodeMessage.Unauthorized });
    }
    c.set('userId', payload.id);
    await next();
});
bookRouter.post('/', async (c) => {
    try {
        const userId = c.get('userId');
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const body = await c.req.json();
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        c.status(StatusCode.OK);
        return c.json({
            id: post.id
        });
    }
    catch (err) {
        console.error("Error during signup:", err);
        c.status(StatusCode.InternalServerError);
        return c.json({ error: StatusCodeMessage.InternalServerError });
    }
});
bookRouter.put('/', async (c) => {
    try {
        const userId = c.get('userId');
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const body = await c.req.json();
        await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            },
            data: {
                title: body.title,
                content: body.content
            }
        });
        c.status(StatusCode.OK);
        return c.text('updated post');
    }
    catch (err) {
        console.error("Error during signup:", err);
        c.status(StatusCode.InternalServerError);
        return c.json({ error: StatusCodeMessage.InternalServerError });
    }
});
bookRouter.get('/:id', async (c) => {
    try {
        const id = c.req.param('id');
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        });
        c.status(StatusCode.OK);
        return c.json(post);
    }
    catch (err) {
        console.error("Error during signup:", err);
        c.status(StatusCode.InternalServerError);
        return c.json({ error: StatusCodeMessage.InternalServerError });
    }
});
bookRouter.post('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const posts = await prisma.post.findMany({});
        c.status(StatusCode.OK);
        return c.json(posts);
    }
    catch (err) {
        console.error("Error during signup:", err);
        c.status(StatusCode.InternalServerError);
        return c.json({ error: StatusCodeMessage.InternalServerError });
    }
});
