import { storiesOf } from '@storybook/vue'
import OutlineButton from '../src/components/Atoms/OutlineButton'

storiesOf('OutlineButton', module)
  .add('Default', () => ({
    components: {
      OutlineButton
    },
    template: `<div style='background-color:#115740; height:10rem; width:50rem'><OutlineButton style="padding:5rem;"></OutlineButton></div>`
  }))