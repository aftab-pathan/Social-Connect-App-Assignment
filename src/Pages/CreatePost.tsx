import PostForm from "@/components/custom/PostForm"

function CreatePost() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 py-10 px-5 md:px-8 lg:p-14">
        <div className="max-w-5xl flex justify-start items-center gap-3 w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2659/2659360.png"
            alt="add"
            width={36}
            height={36}
          />

          <h2 className="text-[24px] font-bold leading-[140%] tracking-tighter md:text-[30px] text-left w-full">
            Create Post
          </h2>
        </div>

        <PostForm action="Create" />
      </div>
    </div>
  )
}

export default CreatePost