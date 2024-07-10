class Decision(){
    constructor(emotion,logic){
        if(!logic){
            throw new Error(
                "Decision shouldn't be based solely on emotion"
            )
        }
    }
}