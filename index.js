window.addEventListener('load', () => {
    SetUpHue();
});

let SetUpHue = () => {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');


    class Pixel {

        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.hue = Math.floor(Math.random() * 360);
            var direction = Math.random() > 0.5 ? -1 : 1;
            this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
        }
        
        update() {
            this.hue += this.velocity;
        }

        render(ctx) {
            var hue = Math.round(this.hue);
            ctx.fillStyle = 'hsl(' + hue + ', 100%, 60% )';
            ctx.fillRect(this.x, this.y, 1, 1);
        }
    }



    var pixels = [
        new Pixel( 0, 0 ),
        new Pixel( 1, 0 ),
        new Pixel( 0, 1 ),
        new Pixel( 1, 1 ),
    ];

    function animate() {
        pixels.forEach( function( pixel ) {
            pixel.update();
            pixel.render( ctx );
        });
        requestAnimationFrame( animate );
    }

    animate();
}