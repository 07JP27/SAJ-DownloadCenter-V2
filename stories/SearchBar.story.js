import { storiesOf } from '@storybook/vue'
import SearchBar from '../src/components/Organisms/SearchBar'

storiesOf('SearchBar', module)
  .add('Default', () => ({
    components: {
      SearchBar
    },
    template: `<div><SearchBar></SearchBar></div>`
  }))