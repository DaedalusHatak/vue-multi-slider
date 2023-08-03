import type {App} from 'vue'
import ImageCarousel  from './components/ImageCarousel.vue'

export default {
  install: (app:App) => {
    app.component('ImageCarousel', ImageCarousel)
  }
}

export { ImageCarousel };