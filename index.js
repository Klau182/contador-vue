const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Contador de Bicicletas con Vue ',
        bicis: [
            {nombre: 'Oxford', cantidad:11},
            {nombre: 'Propain', cantidad:0},
            {nombre: 'Trek', cantidad:12}
        ],
        nuevaBici: '' ,
        total: 0
    },
    methods: {
        agregarBici (){
            this.bicis.push({
                nombre: this.nuevaBici, cantidad: 0
            })
            this.nuevaBici = ''
        }
    },

    computed: {
        sumarBicis() {
            this.total = 0
            for(bici of this.bicis) {
                this.total = this.total + bici.cantidad
            }
            return this.total
        }
    }
})