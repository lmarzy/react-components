import * as React from 'react';
import ComponentList from './components/Component-List/Component-List';
import { Toggle, Modal } from '../../shared/components';

import './styles.scss';

export const initialState = {
  title: 'React Components',
};

export type HomeState = Readonly<typeof initialState>;

const components = [
  {
    id: 1,
    name: 'button',
  },
  {
    id: 2,
    name: 'checkbox',
  },
];

class Home extends React.Component<{}, HomeState> {
  readonly state: HomeState = initialState;

  render() {
    const { title } = this.state;

    return (
      <header className="home-header">
        <div className="l-container">
          <h1 className="home-header__title">{title}</h1>
          <ComponentList components={components} />
          <Toggle>
            {({ isVisible, onToggle }) => (
              <>
                <button onClick={onToggle}>Open Modal</button>
                <Modal visible={isVisible} toggle={onToggle}>
                  <h1>Hey, i'm a Modal again!</h1>
                </Modal>
              </>
            )}
          </Toggle>
        </div>
      </header>
    );
  }
}

export default Home;
