
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function doFunction(){
	var newPixelWidth = 50;
	
	var approxCellx = coords[1].x - coords[0].x;
	var canvasX = coords[2].x - coords[0].x;
	var xResizeScale = (Math.round(canvasX/approxCellx) * newPixelWidth)/canvasX
	
	var approxCelly = coords[1].y - coords[0].y;
	var canvasY = coords[2].y - coords[0].y;
	var yResizeScale = (Math.round(canvasY/approxCelly) * newPixelWidth)/canvasY

    document.getElementById("results2").innerHTML = "X scaling: " + xResizeScale + "    Y scaling: " + yResizeScale;
    
    const elem = document.createElement('canvas');
    elem.width = 0;
    elem.height = 0;
    const ctx = elem.getContext('2d');
    // img.width and img.height will contain the original dimensions
    var image = new Image();
    image.src = fileName.name;
    image.onload = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("blah");
        // TODO DO MATH
        ctx.drawImage(img, 10, 10, imageWidth * xResizeScale, imageHeight * yResizeScale);
        ctx.canvas.toBlob((blob) => {
            download(blob, "test.png", "application/json");
        }, 'image/png', 1);    
    }
}