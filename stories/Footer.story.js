import { storiesOf } from '@storybook/vue'
import Footer from '../src/components/Organisms/Footer'

storiesOf('Footer', module)
  .add('Default', () => ({
    components: {
      Footer
    },
    template: `<div><Footer></Footer></div>`
  }))