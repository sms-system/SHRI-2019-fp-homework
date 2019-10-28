/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withCounterBehaviour from '../hocs/withCounterBehaviour';
import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';

export default compose(
    withCounterBehaviour,
    withSmallSize,
    withPrimaryColor
)(BaseButton);
