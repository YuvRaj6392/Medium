import {z} from 'zod'

export const signupSchema=z.object({
 email:z.string().email(),
 password:z.string().min(6),
 name:z.string().optional()
})

export const signinSchema=z.object({
 email:z.string().email(),
 password:z.string().min(6),
})

//type inference in zod
export type signupSchema=z.infer<typeof signupSchema>

export type signinSchema=z.infer<typeof signinSchema>



