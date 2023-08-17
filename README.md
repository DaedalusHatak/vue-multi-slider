# Preview
![Image Preview](https://github.com/DaedalusHatak/vue-multi-slider/blob/main/public/Preview.jpg)

# Vue 3 Multi Slider

Slider library for `VUE/NUXT` projects with specified number of images per slide

# Demo
[Live demo](https://symphonious-kelpie-14cd31.netlify.app/)
# Installation

Simply use 
```bash
npm i vue-multi-slider@latest
```

and then You can import it in a specific location or in your main.ts/js file 


<details><summary>Component import</summary>

```vue
<script setup>
import {ImageCarousel} from 'vue-multi-slider'
import "vue-multi-slider/style.css"
</script>

<template>

<ImageCarousel />

</template>
```

</details>

<details><summary>Main import</summary>

```bash
import ImageCarousel from 'vue-multi-slider'
import "vue-multi-slider/style.css"
import { createApp } from 'vue'
import App from "./App.vue"

createApp(App).use(ImageCarousel).mount('#app')
```

</details>


# Props

| Parameter | Type | Default | Description |
| --- | :---: | :---: | --- |
| [data](#asNavFor) | array | `[{}]` | Array of objects. Should contain `image` key for images | 
| size | number | `0` | Numbers of slides to show | 
| overflow | boolean | `false` | Enable overflow (best with screen size slider) |
| padding | number | `0` | Specifies X axis padding for component (in rem) |
| buttonWidth | number | `3` | Specifies width of buttons (in rem) |
| buttonPadding | number | `0` | Specifies left and right position for buttons (in rem) |
| buttonVisible | boolean | `false` | Enable visibility for buttons. By standard its showing only when hovered (except mobile) |
| emitImage | boolean | `false` | Enable emitting element with its position on image hover |
| emitImageDealy | number | `550` | Set up time after emit should occur (needs `emitImage` to be `true`) |
| sm | number | `0` | Specifies amount of slides for screens between 640px and 768px `(DISABLED by default)` |
| md | number | `0` | Specifies amount of slides for screens between 768px and 1024px `(DISABLED by default)` |
| lg | number | `0` | Specifies amount of slides for screens between 1024px and 1280px `(DISABLED by default)` |
| xl | number | `0` | Specifies amount of slides for screens between 1280px and 1536px `(DISABLED by default)` |
| xxl | number | `0` | Specifies amount of slides for screens above 1536px `(DISABLED by default)` |

