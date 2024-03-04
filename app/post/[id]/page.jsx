import { Suspense } from "react"
import PostPages from "../page"
const peticion =async (id)=>{
    
const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const dataUser= await data.json()

return dataUser
}

const PageId = async(pro)=>{
    const id =pro.params.id

    const data = await peticion(id)
    return(
        <div>

    <div className=" bg-slate-200 p-6 text-xl font-mono" >
<h1 className=" text-3xl p-61 text-center">Post nº: {id}</h1>
<br />
<h2 >Title: {data.title}</h2>
<br />
<h3>Body: {data.body}</h3>
    </div>
<hr />

<Suspense fallback={<div>

    <h2>Cargando...</h2>
        </div>


}>

</Suspense>

<PostPages></PostPages>
    </div>
)

}
export default PageId