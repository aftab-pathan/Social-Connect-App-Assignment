import { z } from "zod"

export const PostFormSchema = z.object({
  caption: z
    .string()
    .min(5, { message: "Minimum 5 characters required" })
    .max(2000, { message: "Maximum 2000 characters" }),

  file: z.custom<File[]>(),

  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters" }),

  tags: z.string(),
})

export const ProfileSchema = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
  email: z.string().email(),
  bio: z.string(),
})
