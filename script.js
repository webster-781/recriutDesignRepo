document.addEventListener('DOMContentLoaded',()=>{
    /* Initial Animation*/
    x = screen.availWidth*(1);
    y = screen.availHeight*(0.9);
    dur = 500;
    time = 0;
    const svg = d3.select("#svg");    
    svg.attr("preserveAspectRatio", "xMinYMin meet")
       .attr("viewBox", `0 0 ${x} ${y}`)
       .classed("svg-content", true);
    rad = y/10;
       
       const ulc = svg.append('circle')
                      .attr('cx', x/2)
                      .attr('cy', y/2)
                      .attr('r', rad)
                      .style('fill','yellow');
    
       ulc.transition()
          .delay(time)
          .duration(dur)
          .attr('cx',rad)
          .attr('cy',rad);
          time +=dur;

       const urc = svg.append('circle')
                      .attr('cx', x/2)
                      .attr('cy', y/2)
                      .attr('r', rad)
                      .style('fill','red');
       urc.transition()
          .delay(time)
          .duration(dur)
          .attr('cx',x-rad)
          .attr('cy',rad);
          time +=dur;

        const drc = svg.append('circle')
                       .attr('cx', x/2)
                       .attr('cy', y/2)
                       .attr('r', rad)
                       .style('fill','blue');
        drc.transition()
           .delay(time)
           .duration(dur)
           .attr('cx',x-rad)
           .attr('cy',y-rad);
        time +=dur;
            
            
       const dlc = svg.append('circle')
                   .attr('cx', x/2)
                   .attr('cy', y/2)
                   .attr('r', rad)
                   .style('fill','green') ;
        dlc.transition()
           .duration(dur)
           .delay(time)
           .attr('cx',rad)
           .attr('cy',y-rad);
       time +=dur;


    imgw = x*(0.0333);
    imgh = y*0.2;
    imgx = x*(0.1);
    imgy = y*(0.1);
    i = 0;
    img_dur = 100;

    loc = window.location.pathname;
    dir = loc.substring(0, loc.lastIndexOf('/'));
    console.log(dir);//dir is current directory location

    texts = ['t','h','e','i','n','t','e','r','n','e','t','w','e','d','e','s','e','r','v','e'];// slogan

    // loop for the animation of texts
    for (text in texts){ 
        console.log(i);
        if(i==3 || i==11 || i==13)
            imgx += imgw;
        imgx +=imgw;
        time += img_dur;
         image = svg.append('image')
                    .attr('xlink:href', `file://${dir}/images/alpha/alpha-${texts[i]}.jpg`)
                    .attr("x", `${imgx}`)
                    .attr("y", `${imgy}`)
                    .attr("width", `${imgw}`)
                    .attr("height", `${imgh}`)
                    .style("opacity", 0.0);
                                    //image attributes
        image.transition()
             .delay(time)
             .duration(img_dur)
             .style("opacity", 1.0);
                                    //image transition up
        image.transition()
             .delay(time + img_dur*(21-i)+ 1500)
             .style("opacity",0.0)  
             .duration(10)                       //image transition back out
        i = i+1; 
    }

    function load_page(name){
        window.location = `${name}.html`;
    }

    setTimeout(function(){load_page("home");},5000);
    console.log(time);
    });