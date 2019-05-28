import { storiesOf } from '@storybook/vue'
import Card from '../src/components/Molecules/Card'

storiesOf('Card', module)
  .add('Default', () => ({
    components: {
      Card
    },
    template: `<div><v-flex xs3 sm4 md4><Card title='testtest' img='https://cdn.vuetifyjs.com/images/cards/plane.jpg' link="https://twitter.com/" md-6></Card></v-flex></div>`
  }))