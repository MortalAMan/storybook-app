import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('with primary', () =>
    <Button
      label="Primary Button"
      onClick={ action('click') }
      style={{ background: 'blue', border: 'red', cursor: 'pointer' }}
    />)
  .add('with outline', () =>
    <Button
      label="Outline Button"
      style={{ background: 'gray', cursor: 'pointer' }}
    />)
  .add('with rounded corners', () =>
    <Button
      label="Rounded Button"
      style={{ background: 'green', borderRadius: '15px', cursor: 'pointer' }}
    />)
  .add('with text', () =>
    <Button
      label="Text"
      style={{ background: 'pink', border: 'black', cursor: 'pointer' }}
      onClick={ action('clicked') }
    />)
