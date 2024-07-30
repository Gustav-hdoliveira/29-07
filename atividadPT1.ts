let reader = require('readline-sync')

interface Aluno {
    constructor(matricula: Array<number>, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}
class Aluno {
    matricula: Array<number>
    nomeAluno: string
    notaAval1: number
    notaAval2: number
    notaTrabalho: number

    constructor(matricula: Array<number>, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nomeAluno = nome
        this.notaAval1 = notaProva1
        this.notaAval2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    getvalues():void{
        let diaUp = reader.questionInt("Insira o dia do nascimento: ")
        let mesUp = reader.questionInt("Insira o mês de nascimento: ")
        let anoUp = reader.questionInt("Insira o ano de nascimento: ")
        let matricula = [diaUp, mesUp, anoUp]
        this.matricula = matricula
        let alunonome = reader.question('Qual o nome do aluno? ')
        this.nomeAluno = alunonome
        let notaAval1 = reader.questionInt("qual a nota da avaliação 1")
        let notaAval2 = reader.questionInt("qual a nota da avaliação 2")
        let notaAval3 = reader.questionInt("qual a nota do trabalho")
        this.notaAval1 = notaAval1
        this.notaAval2 = notaAval2
        this.notaTrabalho = notaAval3
    }
    media():number{
        return (this.notaAval1 + this.notaAval2 + this.notaTrabalho) / 3
    }
    final():void{
        //não entendi
    }
}

//Questão 2
interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): number;
    getDia(): void;
    getMes(): void;
    getMesExtenso(): void;
    getAno(): void;
    isBissexto(): void;
    clone(): Data;
}
class Data {
    dia: number
    mes: number
    mesInt: string
    ano: number
    bissexto: boolean
    constructor(dia: number, mes: number,mesExtenso: string, ano: number,bissexto: boolean){
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.bissexto = bissexto
    }
    comparar(outraData: Data):void{
        if(this.dia == outraData.dia){
            console.log('od dias são iguais');
        } else {}
    }
    getDia(): void{
        let diaUp = reader.questionInt('dia da data mágica: ')
        this.dia = diaUp
    }
    getMes(): void{
        let mesUp = reader.questionInt('mes da data mágica: ')
        this.mes = mesUp
    }
    getMesExtenso(): void{
        let mesExtensoUp = reader.questionInt('Escrevá o mes por extenso: ')
        this.mesInt = mesExtensoUp
    }
    getAno(): void{
        let anoUp = reader.questionInt('ano da data mágica: ')
        this.ano = anoUp
    }
    isBissexto(): void{
        let bissextoUp = reader.question('O ano é bissexto? true ou false. ')
        this.bissexto = bissextoUp
    }
    clone(): void{
        let clone = `${this.dia}/${this.mes}/${this.ano}`
        console.log(clone)
    }
}