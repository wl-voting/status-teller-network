import React from 'react';

import {storiesOf} from '@storybook/react';
import {withInfo} from "@storybook/addon-info";
import {action} from "@storybook/addon-actions";

import MarginSelectorForm from '../../../src/js/wizards/Sell/5_Margin/components/MarginSelectorForm';

storiesOf('Wizards/Sell/5_Margin', module)
  .add(
    "Default",
    withInfo({inline: true})(() => (
      <MarginSelectorForm margin={12}
                          marketType={0}
                          currency={'USD'}
                          prices={{'ETH': {'USD': 1}}}
                          token={{symbol: 'ETH'}}
                          marginChange={action('margin-change')}
                          marketTypeCHange={action('market-change')}/>
    ))
  );
