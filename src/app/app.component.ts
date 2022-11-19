import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  Video(videoPlayer){
  var myVideo: any = document.getElementById("prez");
  if (myVideo.paused) {
                    if (myVideo.requestFullscreen) {
                        myVideo.requestFullscreen();
                    }
                    else if (myVideo.msRequestFullscreen) {
                        myVideo.msRequestFullscreen();
                    }
                    else if (myVideo.mozRequestFullScreen) {
                        myVideo.mozRequestFullScreen();
                    }
                    else if (myVideo.webkitRequestFullScreen) {
                        myVideo.webkitRequestFullScreen();
                    }
                    myVideo.play();
                }
                else {
                    myVideo.pause();
                }
}
}

