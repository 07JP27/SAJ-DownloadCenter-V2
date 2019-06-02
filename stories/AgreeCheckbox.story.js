import { storiesOf } from '@storybook/vue'
import AgreeCheckbox from '../src/components/Atoms/AgreeCheckbox'

storiesOf('AgreeCheckbox', module)
  .add('Default', () => ({
    components: {
        AgreeCheckbox
    },
    template: `<div><AgreeCheckbox /></div>`
  }))