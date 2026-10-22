export const registration=(req,res)=>{
    let userToAdd=req.body
    if(!userToAdd.id||!userToAdd.name||!userToAdd.password)
        res.status(400).json({message:"You need to enter all the details of the user."})
    else{
        let newUser={id:id, ...userToAdd}
        books.push(newUser)
        res.status(201).json(books)
    }
}
export const login=(req,res)=>{
    const userId=Number(req.params.id)
     if(users.length===0)
        res.status(404).json({message:"No Users found"})
    else{
    const user=users.find(u=>u.id===userId)
    if(!user)
           res.status(404).json({message:"This id does not exist"})
    else
        res.status(200).json(book)
}
}

export const getAllUsers=(req,res)=>{
    if(users.length===0)
            res.status(404).json({message:"No Users found"})
        else{
            res.status(200).json(users)
        }

}