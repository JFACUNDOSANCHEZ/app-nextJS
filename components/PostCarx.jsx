'use client'

import Link from "next/link"

const PostCardx =({u})=>{

return(
<div className="relative">
    <h1 className="font-bold">{u?.id}.{u?.title}</h1>
    <br />
    <p>Body: <br /> {u?.body}</p>
    <Link href={`/post/${u.id}`}>
        <div className="flex justify-center py-8 top-14">
            <button onClick={() => { console.log('boton apretado'); }} className="border bg-blue-300 rounded-lg w-[60%] justify-center mx-0 font-bold mb-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
                Button
            </button>
        </div>
    </Link>
</div>

)

}
export default PostCardx