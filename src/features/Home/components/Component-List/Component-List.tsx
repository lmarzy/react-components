import * as React from 'react';

interface Component {
  id: number;
  name: string;
}

interface ComponentListProps {
  components: Component[];
}

const ComponentList: React.SFC<ComponentListProps> = ({ components }) => (
  <ul>
    {components.map((component: Component) => {
      return <li key={component.id}>{component.name}</li>;
    })}
  </ul>
);

export default ComponentList;
