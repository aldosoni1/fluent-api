import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';

function App() {
  const alertClicked = () => {
    alert('Clicked');
  };
  const siteTextStyles = {
    root: {
      color: '#025F52',
      fontWeight: FontWeights.semibold,
    },
  };
  const descriptionTextStyles = {
    root: {
      color: '#333333',
      fontWeight: FontWeights.regular,
    },
  };
  const helpfulTextStyles= {
    root: {
      color: '#333333',
      fontWeight: FontWeights.regular,
    },
  };
  const iconStyles = {
    root: {
      color: '#0078D4',
      fontSize: 16,
      fontWeight: FontWeights.regular,
    },
  };
  const footerCardSectionStyles = {
    root: {
      alignSelf: 'stretch',
      borderLeft: '1px solid #F3F2F1',
    },
  };

  const sectionStackTokens = { childrenGap: 20 };
  const cardTokens = { childrenMargin: 12 };
  const footerCardSectionTokens = { padding: '0px 0px 0px 12px' };
  return (
    <div className="App">
      <Card aria-label="Clickable horizontal card " horizontal onClick={alertClicked} tokens={cardTokens}>
          <Card.Item fill>
            <Image src="https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={siteTextStyles}>
              Contoso
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
            <Text variant="small" styles={helpfulTextStyles}>
              Is this recommendation helpful?
            </Text>
          </Card.Section>
          <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <Icon iconName="RedEye" styles={iconStyles} />
            <Icon iconName="SingleBookmark" styles={iconStyles} />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <Icon iconName="MoreVertical" styles={iconStyles} />
          </Card.Section>
        </Card>
    </div>
  );
}
export default App;
