module.exports = class teacherController {
    //Cadastro de professor
  static async postTeacher(req, res) {
    const { nome, cargaHoraria } = req.body;
    if (!nome || !cargaHoraria) {
      res.status(400).json({ message: "Dados Insuficientes/Inválidos!" });
    } else {
      res.status(200).json({
        message: "Informação recebida: Docente cadastrado",
        nome,
        cargaHoraria,
      });
    }
  }
  //Listar professores
  static async getTeacher(req, res) {
    res
      .status(200)
      .json({ message: "Tudo certo!!", nome: "Euller", cargaHoraria: 99 });
  }
};
