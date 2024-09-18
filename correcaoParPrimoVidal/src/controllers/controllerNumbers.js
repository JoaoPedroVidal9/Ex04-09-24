module.exports = class controllerNumbers{
    static async checkPar(req, res){
        const {numero} = req.body;

        if(typeof numero !== "number"){
            return res.status(400).json({message:"Digite um número."})
        }

        if(numero%2 == 0){
            return res.status(200).json({message : "O número é par!"});
        }
        return res.status(400).json({message:"O número é ímpar!"});
    }

    static async checkPrimo(req,res){
        const {numero} = req.body;

        if(typeof numero !== "number"){
            return res.status(400).json({message:"Digite um número."})
        }

        if(numero<=1){
            return res.status(200).json({message:"Não é primo, é um ou menos!"});
        }
        for(let i = 2; i < numero; i++){
            if(numero %i == 0){
                return res.status(200).json({message:"O número não é primo!"});
            }
        }
        return res.status(200).json({message:"É primo!"});
    }
}