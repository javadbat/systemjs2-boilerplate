class bootstrap{
    constructor(){
        this.initMapper().then(()=>{
            this.lunchApp();
        })
    }
     async initMapper() {
        document.head.appendChild(Object.assign(document.createElement('script'), {
            type: 'importmap',
            innerHTML: await (await fetch('/importmap.json')).text()
        }));
    }
    lunchApp(){
        import('/Client/Assets/js/index.js');
    }

}
var app = new bootstrap();