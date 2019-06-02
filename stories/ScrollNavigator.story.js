import { storiesOf } from '@storybook/vue'
import ScrollNavigator from '../src/components/Atoms/ScrollNavigator'

storiesOf('ScrollNavigator', module)
  .add('Default', () => ({
    components: {
        ScrollNavigator
    },
    template: `<div style='background-color:#115740; height:30rem; width:100rem'><ScrollNavigator></ScrollNavigator></div>`
  }))