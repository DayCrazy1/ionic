export class Entrega {
    id: string;
    produto: string;
    descricao: string;
    peso: number;
    largura: number;
    altura: number;
    comprimento: number;
    quant: number;
    valor: number;
    ativo: boolean = true;
    lat:number;
    lng:number;
    fotos:string[]=[];
}
