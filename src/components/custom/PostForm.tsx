import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useNavigate } from "react-router-dom"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import FileUploader from "./FileUploader"
import { PostFormSchema } from "@/lib/formValidation"


type PostFormProps = {
  post?: any;
  action: "Create" | "Update"
}

const PostForm = ({ post, action }: PostFormProps) => {
//   const { user } = useUserContext()
//   const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof PostFormSchema>>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post.location : "",
      tags: post ? post.tags.join(",") : "",
    },
  })

  // Query
//   const { mutateAsync: createPost, isLoading: isLoadingCreate } =
//     useCreatePost()

//   const { mutateAsync: updatePost, isLoading: isLoadingUpdate } =
//     useUpdatePost()

//   async function onSubmit(values: z.infer<typeof PostFormSchema>) {
//     // Action = Update
//     if (post && action === "Update") {
//       const updatedPost = await updatePost({
//         ...values,
//         postId: post.$id,
//         imageId: post.imageId,
//         imageUrl: post.imageUrl,
//       })

//       if (!updatedPost) {
//         toast({
//           title: `${action} post failed. Please try again.`,
//         })
//       }

//       return navigate(`/posts/${post.$id}`)
//     }

//     const newPost = await createPost({ ...values, userId: user.id })

//     if (!newPost) {
//       toast({ title: "Please try again" })
//     }

//     navigate("/")
//   }

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl custom-scrollbar"
      >
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>

              <FormControl>
                <Textarea
                  className="h-36 border border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Photos</FormLabel>

              <FormControl>
                <FileUploader
                  fieldChange={field.onChange}
                  mediaUrl={post?.imageUrl}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Location</FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="h-12 border border-slate-400  focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Tags (separated by comma " , ")</FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="h-12 border border-slate-400  focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Movies, Travel, Explore"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center justify-end">
          <Button type="button" className="h-12 px-5 bg-red-500 flex gap-2">
            Cancel
          </Button>

          <Button
            type="submit"
            className="h-12 px-5 bg-green-500 flex gap-2 whitespace-nowrap"
            // disabled={isLoadingCreate || isLoadingUpdate}
          >
            {/* {(isLoadingCreate || isLoadingUpdate) && <Loader />} */}
            {action} post
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PostForm
