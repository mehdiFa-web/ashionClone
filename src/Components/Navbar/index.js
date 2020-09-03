class Navbar {

    constructor({
        Menu,
        Toggler,
        width ,
        innerNav ,
        close
    }) {
        this.Menu = document.querySelector(Menu);
        this.Toggler = document.querySelector(Toggler);
        this.innerNav = document.querySelector(innerNav)
        this.close = document.querySelector(close)
        this.Width = width;
        this.state = false;
        this.load();
    }
}


Navbar.prototype.load = function () {
    this.Toggler.addEventListener('click',() => {

            this.Menu.setAttribute('style',`width:100%`);
            this.innerNav.setAttribute('style','width:19rem');
        
    })

    this.close.addEventListener('click',()=>{
        this.Menu.removeAttribute('style');
        this.innerNav.removeAttribute('style')
    })
}



export default Navbar;

