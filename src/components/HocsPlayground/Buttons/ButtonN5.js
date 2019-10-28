/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withRotateBehaviour from '../hocs/withRotateBehaviour';
import withLargeSize from '../hocs/withLargeSize';
import withPrimaryColor from '../hocs/withPrimaryColor';

export default compose(
    withRotateBehaviour,
    withLargeSize,
    withPrimaryColor
)(BaseButton);