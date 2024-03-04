import PostCardx from "@/components/PostCarx"

 
const peticion = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = data.json()
    return res
}
const PostPages = async () => {

    const data = await peticion();
    return (
        <div >
         
                <h1 className="text-4xl text-gray-700 font-bold mb-4 text-center py-4">POSTS</h1>
    <div className="grid grid-cols-3 ">
            {
                data.map((u) => {
                    return (
                        <div key={u.id} className="p-4 bg-slate-100 border  rounded-3xl m-4">
                         <PostCardx u={u} key={u.id}></PostCardx>
                        </div>
                    )
                })
            }
        </div>
        </div>

    )
}
export default PostPages