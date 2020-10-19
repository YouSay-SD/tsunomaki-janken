import React from 'react';
import { Panel } from '../components';

export function PanelContainer() {
  const title = [...'Make Your Choice'];

  return (
    <Panel>
      <Panel.Title>
        {title.map((letter, i) => (
          <span key={i}>{ letter }</span>
        ))}
      </Panel.Title>
    </Panel>
  )
}
