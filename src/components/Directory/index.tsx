import React from 'react'

import MenuItem from '../MenuItem'

interface Props {
  sections: ItemData[]
}

const Directory: React.FC<Props> = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} id={id} {...otherSectionProps} />
    ))}
  </div>
)

export default Directory
