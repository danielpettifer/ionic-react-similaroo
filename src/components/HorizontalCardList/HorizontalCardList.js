import React from 'react';

import styled from 'styled-components';

const HorizontalList = styled.div `
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding-right: 32px !important;
`
class HorizontalCardList extends React.Component {

  render() {
    return (
      <HorizontalList className="horizontal ion-padding">
        {this.props.children}
      </HorizontalList>
    )
  }
}

export default HorizontalCardList;