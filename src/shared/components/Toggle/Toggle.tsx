import * as React from 'react';

interface ToggleProps {
  children: React.ReactNode;
}

const initialState = {
  isVisible: false,
};

type ToggleState = Readonly<typeof initialState>;

const onToggle = (state: ToggleState): ToggleState => {
  const newState = { ...state };
  newState.isVisible = !newState.isVisible;

  return newState;
};

export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  readonly state: ToggleState = initialState;

  handleToggle = (): void => {
    this.setState(onToggle(this.state));
  };

  render() {
    const { children } = this.props;
    const renderProps = { isVisible: this.state.isVisible, onToggle: this.handleToggle };

    return children(renderProps);
  }
}
