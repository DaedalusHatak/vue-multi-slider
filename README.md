# Vue 3 Multi Slider

Slider library for `VUE/NUXT` projects with specified number of images per slide

# Installation

Simply use `npm i vue-multi-slider@latest`

and then You can import it in a specific location or in your main.ts/js file 

For component import:
{
`import {ImageCarousel} from 'vue-multi-slider'`
`import "vue-multi-slider/style.css"`
}

For main import: 
{
`import ImageCarousel from 'vue-multi-slider'`
`import "vue-multi-slider/style.css"`
with additional `.use(ImageCarousel)` (i.e `createApp(App).use(ImageCarousel).mount('#app')`)
}
# Props

- `data` : (MediaItem[]) You should provide array of objects with `image` key (i.e `{image: https://image.com/image.jpg}` )
- `size` : (Number) Declares how many images should be visible by default

# Props (optional)

- `overflow` : (Boolean) If images should be overflowing or not (i.e. when slider is fully wide and next image should be slightly visible)
- `buttonPadding`: (Number) Specifies exact button location (i.e. with overflow turned on it can be outside of div like on screen edge)
- `padding`: (Number) Specifies padding for left and right for Slider
- `buttonWidth`: (Number) Specifies how wide a button should be
- `buttonVisible`: (Boolean) If it is false buttons are visible only on hover those buttons. Otherwise always visible (except mobile)

If you decide to go with more than one image per slide You can use this props to declare how many elements should be visible depending of screen size:
# Screen Props (optional)
- `xxl`: (Number) Above 1536px 
- `xl` : (Number) Between 1280px and 1536px
- `lg` : (Number) Between 1024px and 1280px
- `md` : (Number) Between 768px  and 1024px 
- `sm` : (Number) Between 640px  and 768px


