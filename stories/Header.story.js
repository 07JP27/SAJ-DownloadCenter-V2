import { storiesOf } from '@storybook/vue'
import Header from '../src/components/Organisms/Header'

storiesOf('Header', module)
  .add('Default', () => ({
    components: {
      Header
    },
    template: `<div><Header></Header></div>`
  }))