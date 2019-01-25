window.onload = function(){
    var bx = document.getElementById('content');
    var ts = bx.getElementsByClassName('box');
    var tsWidth = ts[0].offsetWidth;
    var expWidth = 100;
    var bxWidth = tsWidth + expWidth * (ts.length-1);
    bx.style.width = bxWidth + 'px';

    function setPos(){
        for(var i=1;i<ts.length;i++){
            ts[i].style.left = tsWidth + expWidth * (i-1) + 'px';
        }
    }
    setPos();

    var translate = tsWidth - expWidth;

    //绑定事件
    for(var i = 0; i<ts.length; i++){
        (function(i){
            ts[i].onmousedown = function(){
                setPos();
                for (var j = 1; j <= i; j++) {
					ts[j].style.left = parseInt(ts[j].style.left) - translate + 'px';
				}
            };
        })(i);
    }
}