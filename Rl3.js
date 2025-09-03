class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }
    get obterNomeMaiusculo(){ return String(this.nome).toUpperCase() }
    get obterNomeMinusculo(){ return String(this.nome).toLowerCase() }
    get obterCpfMaiusculo(){ return String(this.#cpf).toUpperCase() }
    get obterCpfMinusculo(){ return String(this.#cpf).toLowerCase() }
    get obterEnderecoMaiusculo() { return this.endereco.getEnderecoCompleto.toUpperCase() }
    get obterEnderecoMinusculo() { return this.endereco.getEnderecoCompleto.toLowerCase() }
    get obterTelefonesMaiusculo() {
    return Array.from(this.telefones).map(t => t.getTelefone.toUpperCase())
    }
    get obterTelefonesMinusculo() {
    return Array.from(this.telefones).map(t => t.getTelefone.toLowerCase())
    }
}

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
    get obterDddMaiusculo(){ return String(this.ddd).toUpperCase() }
    get obterDddMinusculo(){ return String(this.ddd).toLowerCase() }
    get obterNumeroMaiusculo(){ return String(this.numero).toUpperCase() }
    get obterNumeroMinusculo(){ return String(this.numero).toLowerCase() }
    get obterTelefone() {
    return `(${this.ddd}) ${this.numero}`
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    get obterEstadoMaiusculo(){ return String(this.estado).toUpperCase() }
    get obterEstadoMinusculo(){ return String(this.estado).toLowerCase() }
    get obterCidadeMaiusculo(){ return String(this.cidade).toUpperCase() }
    get obterCidadeMinusculo(){ return String(this.cidade).toLowerCase() }
    get obterRuaMaiusculo(){ return String(this.rua).toUpperCase() }
    get obterRuaMinusculo(){ return String(this.rua).toLowerCase() }
    get obterNumeroMaiusculo(){ return String(this.numero).toUpperCase() }
    get obterNumeroMinusculo(){ return String(this.numero).toLowerCase() }
    get obterEnderecoCompleto() {
        return `${this.rua}, ${this.numero} - ${this.cidade} / ${this.estado}`
    }
}
class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()

    }
    get obterRazaoSocialMaiusculo(){ return String(this.razaoSocial).toUpperCase() }
    get obterRazaoSocialMinusculo(){ return String(this.razaoSocial).toLowerCase() }
    get obterNomeFantasiaMaiusculo(){ return String(this.nomeFantasia).toUpperCase() }
    get obterNomeFantasiaMinusculo(){ return String(this.nomeFantasia).toLowerCase() }
    get obterCnpjMaiusculo(){ return String(this.#cnpj).toUpperCase() }
    get obterCnpjMinusculo(){ return String(this.#cnpj).toLowerCase() }
    // Conversão de objetos para string (endereços e telefones da empresa)
    // não funcionam corretamente porque endereco é um objeto, e String(obj) vira "[object Object]
    // get obterEnderecoMaiusculo(){ return String(this.endereco).toUpperCase() }
    // get obterEnderecoMinusculo(){ return String(this.endereco).toLowerCase() }
    get obterClientesMaiusculo(){ return Array.from(this.clientes).map(c => c.nome.toUpperCase()) }
    get obterClientesMinusculo(){ return Array.from(this.clientes).map(c => String(c.nome).toLowerCase()) }
    get obterTelefonesMaiusculo() { return Array.from(this.telefones).map(t => t.obterTelefone.toUpperCase()) }
    get obterTelefonesMinusculo() { return Array.from(this.telefones).map(t => t.obterTelefone.toLowerCase()) }

    /*
    Razão Social: ABC LTDA
    Nome fantasia: Mercado Online
    -----------------
    Nome: João
    Estado: SP cidade: São José dos Campos rua: Av Andrômeda numero: 987
    ddd: 999999999 numero: 999999999
    ddd: 999999999 numero: 999999999

    */
    descricao() {
    let textoClientes = ''

        for (const cliente of this.clientes) {
            const end = cliente.endereco;
            const tels = Array.from(cliente.telefones).map(t => `ddd: ${t.ddd} numero: ${t.numero}`).join('\n');
            textoClientes += (`----------------- \nNome: ${cliente.obterNomeMaiusculo} \nEstado: ${end.obterEstadoMaiusculo} cidade: ${end.obterCidadeMaiusculo} rua: ${end.obterRuaMaiusculo} numero: ${end.obterNumeroMaiusculo} \n${tels} \n`
            )
        }
        return (`Razão Social: ${this.razaoSocial} \nNome fantasia: ${this.nomeFantasia} \n${textoClientes}`
        )
    }
}

// Clientes
let cliente1 = new Cliente('Antônio Mendes', '76533488932', new Endereco('SP', 'Sorocaba', 'Rua das Rosas', '412'));
let cliente2 = new Cliente('Maria Carmendes', '09812365411', new Endereco('SP', 'Campinas', 'Nova Iguáçu', '315'));
let cliente3 = new Cliente('José Bonifácio', '413968276065', new Endereco('RJ', 'Caxias', 'Avenida Rio Branco', '92'));
let cliente4 = new Cliente('Carlos Drummond', '03284761738', new Endereco('PA', 'Belém', 'Mar das Olivéiras', '15'));
let cliente5 = new Cliente('Julia Silva', '83274881639', new Endereco('MG', 'Juíz de Fora', 'Av Otacílio Negrão', '52'));

// Adicionar telefones aos clientes
cliente1.telefones.add(new Telefone('11', '987654321'))
cliente1.telefones.add(new Telefone('11', '912345678'))

cliente2.telefones.add(new Telefone('21', '998877665'))
cliente2.telefones.add(new Telefone('21', '996633221'))

cliente3.telefones.add(new Telefone("31", "96666-4444"))
cliente3.telefones.add(new Telefone("31", "95555-5555"))

cliente4.telefones.add(new Telefone("51", "94444-6666"))
cliente4.telefones.add(new Telefone("51", "94564-8888"))

cliente5.telefones.add(new Telefone("41", "93333-7777"))
cliente5.telefones.add(new Telefone("41", "92222-8888"))


// console.log(cliente1.obterNomeMaiusculo)
// console.log(cliente1.obterCpfMinusculo)
// console.log(cliente1.endereco.obterEstadoMaiusculo)
// console.log(cliente1.endereco.obterCidadeMaiusculo)
// console.log(cliente1.endereco.obterRuaMaiusculo)
// console.log(cliente1.endereco.obterNumeroMaiusculo)
//Não consegue acessar por causa do Set
// console.log(cliente1.telefones.obterDddMaiusculo) 
//Jeito correto de acessar os telefones do cliente1:
// console.log(Array.from(cliente1.telefones)[0].ddd)
// console.log(Array.from(cliente1.telefones)[0].obterDddMaiusculo)
// console.log(Array.from(cliente1.telefones)[0]['ddd'])


// Endereço da empresa
let enderecoEmpresa = new Endereco('São Paulo', 'São Paulo', 'Av Paulista', '1000');
let empresa = new Empresa('Romagnole LTDA', 'Romagnole', '1254567890001', enderecoEmpresa);

// Telefones da empresa
empresa.telefones.add(new Telefone('11', '999999999'));
empresa.telefones.add(new Telefone('11', '888888888'));

// Adicionar clientes à empresa
empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);
empresa.clientes.add(cliente3);
empresa.clientes.add(cliente4);
empresa.clientes.add(cliente5);

//Testes
// console.log(Array.from(empresa.clientes)[0]['nome']);
// console.log(Array.from(empresa.clientes)[0].obterNomeMaiusculo);
// console.log(Array.from(Array.from(empresa.clientes)[0].telefones)[0]['ddd'])
// console.log(Array.from(Array.from(empresa.clientes)[0].telefones)[0].obterDddMaiusculo)
// console.log(Array.from(empresa.clientes)[1].endereco.obterCidadeMinusculo)
// console.log(Array.from(Array.from(empresa.clientes)[1].telefones)[0].obterDddMinusculo)
// console.log(empresa.obterTelefonesMaiusculo)

console.log('\n'+empresa.descricao())