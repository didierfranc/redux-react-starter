import React from 'react'
import renderer from 'react-test-renderer'

import Github from '../Github'

global.fetch = jest.fn(() => new Promise((resolve) => {
  process.nextTick(() => resolve({ json: () => ({}) }))
}))

it('Properly render Github component', () => {
  const component = renderer.create(<Github />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
