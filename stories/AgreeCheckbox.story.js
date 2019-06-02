import { storiesOf } from '@storybook/vue'
import AgreeCheckbox from '../src/components/Atoms/AgreeCheckbox'

storiesOf('AgreeCheckbox', module)
  .add('Default', () => ({
    components: {
        AgreeCheckbox
    },
    template: `<div><AgreeCheckbox>「<a href="hogeho">各種使用に関して</a>」に同意します。</AgreeCheckbox></div>`
  }))