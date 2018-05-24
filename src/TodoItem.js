import React from 'react'
import { Checkbox, EditableText } from '@blueprintjs/core'

const TodoItem = props => {
  return (
    <div className='TodoItem'>
      <Checkbox
        className='TodoCheckbox'
        checked={props.checked}
        onChange={event => props.onChecked(event.target.checked)} />
      <EditableText className='TodoField' value={props.text} />
    </div>
  )
}

export default TodoItem
