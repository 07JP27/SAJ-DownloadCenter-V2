import { storiesOf } from '@storybook/vue'
import OutlineButton from '../src/components/Atoms/OutlineButton'

storiesOf('OutlineButton', module)
  .add('Default', () => ({
    components: {
      OutlineButton
    },
    template: `<div style='background-color:green; height:10rem; width:50rem'><OutlineButton></OutlineButton></div>`
  }))