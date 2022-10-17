class Honeys {
    constructor(row){
        this.row = row
        this.domHoneys = null
        
    }
    render(){
        this.create()
    }
    create(){

        this.domHoneys = document.createElement('div')
            this.domHoneys.classList.add('honeys')
            this.domHoneys.setAttribute('data-row', this.row)
            for (let data = 1; data <= ((this.row % 2 == 0) ? 5 : 6); data++) {
                const img = new Image()
                img.src = './source/img/polygon.png'
                img.classList.add('honey')
                this.domHoneys.append(img)
            } 


        game.templatGame.append(this.domHoneys)
    }
}