import { storiesOf } from '@storybook/vue'
import CardGroup from '../src/components/Organisms/CardGroup'

storiesOf('CardGroup', module)
  .add('Default', () => ({
    components: {
      CardGroup
    },
    data () {
      return {
        title: 'タイトルタイトル',
        data: [
          { title: 'ガイドライン', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: 'コミュニケーションロゴ', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: 'パワーポイント1', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: 'パワーポイント2', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: 'レターヘッド', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '名刺1', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '名刺2', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '名刺3', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '壁紙1', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '壁紙2', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '壁紙3', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' },
          { title: '携帯用壁紙', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' }
        ]
      }
    },
    template: `<div><CardGroup :cards="data" :title="title"></CardGroup></div>`
  }))
  .add('Single', () => ({
    components: {
      CardGroup
    },
    data () {
      return {
        title: 'タイトルタイトル',
        data: [
          { title: 'ガイドライン', img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', link: '/brandguide.pdf' }
        ]
      }
    },
    template: `<div><CardGroup :cards="data" :title="title"></CardGroup></div>`
  }))