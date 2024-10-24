
//Simulando o acesso ao banco
async function Listar() {
    
    const doctors = [
        {id: 1, name: "Guebo"},
        {id: 2, name: "Veloso"}
    ]
    
    return doctors;
}

export default { Listar };