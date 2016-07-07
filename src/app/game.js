import options from './options';

const OPTIONS = options;

class Game {
  constructor() {
    this.options = OPTIONS;

    this.init();
  }

  init() {
    document.querySelector('.load-image-button').addEventListener(() => this._loadImage);
  }

  _loadImage() {
    document.getElementById('picField').onchange = function (evt) {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById(outImage).src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }

        // Not supported
        else {
            // fallback -- perhaps submit the input to an iframe and temporarily store
            // them on the server until the user's session ends.
        }
    }
  }
}

var _Game = new Game();
