document.addEventListener("DOMContentLoaded",()=>{
    x = screen.availWidth*(0.90);
    y = screen.availHeight*(0.72);
    rad = screen.availHeight*(0.09);
    colors = ["yellow","red","blue","green"];
    lefts = [0,x,x,0]
    tops = [0,0,y,y]
    i = 0;
    function load_page(name){
        window.location = `${name}.html`;
    }
    document.querySelectorAll(".navigate").forEach(button =>
        {
            button.setAttribute('style',`font-size: ${rad/4}px; font-family: "Times New Roman", Times, serif;position: fixed; top:${tops[i]}px; left: ${lefts[i]}px;width :${2*rad}px; height: ${2*rad}px; background: ${colors[i]}; border-radius :${rad}px`)
            i++;
            const name = button.id;
            button.onclick = () =>
            {
                //console.log(`Clicked on ${name}.html`);
                load_page(name);
            }
        });
    
});