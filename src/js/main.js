import MainSlider from "./modules/slider/slider";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import { container } from "webpack";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next'
    });
    showUpSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});