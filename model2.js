function test(){
    alert('hi');
    let c = document.getElementById("myCanvas");
    let R = document.getElementById("R_number").value;
    let y=1;
    let a;
    let x=1;
    let ctx = c.getContext("2d");
    for(let i=1; i<50; i++){
        a=400-y;
        ctx.moveTo(x,a);
        y = y*R;
        x = x+20;
        a=400-y;
        ctx.lineTo(x,a);
        ctx.stroke();
    }
}