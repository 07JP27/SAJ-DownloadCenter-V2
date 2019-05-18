import { storiesOf } from '@storybook/vue'
import Hero from '../src/components/Organisms/Hero'

storiesOf('Hero', module)
  .add('Default', () => ({
    components: {
      Hero
    },
    template: `<div><Hero></Hero></div>`
  }))