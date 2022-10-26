
function draw() {
    background (0);
    if (pct < 1.0) {
        x = startX + ((stopX-startX) * pct); 
        y = startY + ((startY-startX) * pct);
        pct += step;
     let ball = {size: "x,x,20,20", color: "33F6FF" };    
     
    }
}