import * as React from 'react';
import {render, cleanup} from 'react-native-testing-library';
import { toHaveProp } from '@testing-library/jest-native';

expect.extend({ toHaveProp });
import { Card } from '../Card';
import Colors from '../../constants/Colors';

afterEach(cleanup);

describe('<Card />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Card article={{title: 'Test'}} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should properly render the title text', () => {
    const rendered = render(<Card article={{title: 'Test'}} />);
    const textComponent = rendered.getByTestId('titleText');

    expect(textComponent.props.children).toEqual('Test');
  });

  it('should properly render the image', () => {
    const rendered = render(<Card article={{title: 'Test', image: require('../../assets/images/robot-dev.png')}} />);
    const imageBackgroundComponent = rendered.getByTestId('backgroundImage');
    expect(imageBackgroundComponent).toHaveProp('source', require('../../assets/images/robot-dev.png'));
  });
});