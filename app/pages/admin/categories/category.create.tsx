import CategoryForm from "~/components/features/categories/Category.form";

export default function CategoryCreatePage(){
    const createCategory = async (data:any)=>{
        return(
            console.log("Ham them danh muc", data)
        )
    }
    return(
        <div className="">
            <CategoryForm 
             mode="create"
             onSubmit={createCategory}/>
        </div>
    )
}