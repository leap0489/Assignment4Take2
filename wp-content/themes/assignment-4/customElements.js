class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

  class DaysLeft extends HTMLElement{
        connectedCallback(){
            let today=new Date();
            let nPiDay=new Date(today.getFullYear(), 4, 1);
            let nSeconds = 1000*60*60*24;
            let nDaysLeft = Math.ceil((nPiDay.getTime()-today.getTime())/(nSeconds));
            console.log(nDaysLeft);
			this.innerHTML = nDaysLeft
        }
    }

    customElements.define("x-daysleft", DaysLeft);

    class SaleDays extends HTMLElement{
        connectedCallback(){
            let today=new Date();
            let nPiDay=new Date(today.getFullYear(), 4, 1);
            this.innerHTML = nPiDay.toLocaleDateString('en-CA');
        }
    }

    customElements.define("x-saledays", SaleDays);