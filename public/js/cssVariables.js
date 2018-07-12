var blurInput = document.querySelector('input[name=blur]');
var baseColorInput = document.querySelector('input[name=baseColor]');
var spacingInput = document.querySelector('input[name=spacing]');

var img = document.querySelector('#img');
var jsText = document.querySelector('#js');

blurInput.addEventListener('input', function(){
    var blurValue = this.value / 10;
    img.style.setProperty('--blurValue', `${blurValue}rem`);
});

spacingInput.addEventListener('input', function(){
    var spacingValue = this.value;
    img.style.setProperty('--border', `${spacingValue}rem`);
});

baseColorInput.addEventListener('input', function(){
    var baseColorValue = this.value;
    img.style.setProperty('--baseColor', baseColorValue);
    jsText.style.setProperty('--baseColor', baseColorValue);
})
