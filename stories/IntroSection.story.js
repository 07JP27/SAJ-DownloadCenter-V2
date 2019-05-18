import { storiesOf } from '@storybook/vue'
import IntroSection from '../src/components/Molecules/IntroSection'

storiesOf('IntroSection', module)
  .add('Default', () => ({
    components: {
      IntroSection
    },
    template: `<div><IntroSection></IntroSection></div>`
  }))