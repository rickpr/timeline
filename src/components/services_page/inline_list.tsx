import React from 'react'

const InlineList = ({ children }: { children: React.ReactNode }): JSX.Element =>
  <ul style={{ paddingLeft: 0, fontSize: '0.75rem', margin: 0 }}>{children}</ul>

export default InlineList
