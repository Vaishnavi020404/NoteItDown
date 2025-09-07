export const getAllNotes=(req,res)=>{
    res.status(200).send("you just fetched the notes");
}

export const createNotes=(req,res)=>{
    res.status(201).json({message:"Notes created Successfully"});
}

export const updateNotes=(req,res)=>{
    res.status(200).json({message:"Notes updated successfully"});
}

export const deleteNotes=(req,res)=>{
    res.status(200).json({message:"Notes deleted successfully"});
}
