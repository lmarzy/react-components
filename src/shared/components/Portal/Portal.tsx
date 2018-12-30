import * as React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactChild;
}

const portalRoot = document.getElementById('portal');

export default class Portal extends React.Component<PortalProps, {}> {
  private el = document.createElement('div');

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;

    return createPortal(children, this.el);
  }
}
