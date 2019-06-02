import { storiesOf } from '@storybook/vue'
import ScrollNavigator from '../src/components/Atoms/ScrollNavigator'

storiesOf('ScrollNavigator', module)
  .add('Default', () => ({
    components: {
        ScrollNavigator
    },
    template: `<div style='background-color:#115740; height:10rem; width:50rem'><ScrollNavigator></ScrollNavigator></div>`
  }))