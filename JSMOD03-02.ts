// Classe Abstrata Computador

class Computador {
    ram: string;
    hdd: string;
    cpu: string;
    constructor(ram: number, hdd: number, cpu: number) {
        this.ram = ram+"GB"
        this.hdd = hdd+"GB"
        this.cpu = cpu+"GHz"
    }
}

// Classe Abstrata Filha Modelo

class Modelo extends Computador {
    type: string
    constructor(ram: number, hdd: number, cpu: number, type: string) {
        super (ram, hdd, cpu)
        this.type= type
    }
    getRam() {
        return this.ram
    }
    getHdd() {
        return this.hdd
    }
    getCpu() {
        return this.cpu
    }
    toString() {
        console.log(`Fabricando um ${this.type} com memória RAM de ${this.ram} frequencia da CPU de ${this.cpu} e HDD com ${this.hdd}`)
    }
}

// Fabrica de Computadores (simulaçao da interface e classes concretas "PC" e "SERVER" )

function FabricaDeComputadores(tipo: string) {
    switch (tipo.toUpperCase()){
        case "PC" :
            const Pc = new Modelo(16,500,3.2,"PC")
            console.log(Pc.getRam()) // teste do getter
            Pc.toString()
            break
        case "SERVER":
            const Server = new Modelo (32,2000, 4,"Server")
            Server.toString()
            break
        default :
            console.log(`Nao Fabricamos o modelo ${tipo}`)

    }
}

FabricaDeComputadores("pc")
FabricaDeComputadores("server")
FabricaDeComputadores("Notebook")

