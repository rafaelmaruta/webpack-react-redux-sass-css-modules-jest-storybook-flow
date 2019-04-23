import { configure } from '@storybook/react'
import '../src/scss/_import-once.scss'

const req = require.context('../src', true, /story\.jsx$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)