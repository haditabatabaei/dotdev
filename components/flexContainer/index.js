import cn from 'classnames';

import styles from './flexContainer.module.scss';
import { alignItemsToClassMap, justifyContentToClassMap } from './constants';

export default function FlexContainer({ 
    alignItems = "start",
    justifyContent = "start",
    column = false,
    gap = 0,
    children,
    className: classNameProp,
    as: As = 'div'
}) {
    const alignClassName = alignItemsToClassMap[alignItems]
    const justifyClassName = justifyContentToClassMap[justifyContent]
    const directionClass = column ? styles.column : null;

    return (
        <As className={cn(styles.container, styles[alignClassName], styles[justifyClassName], directionClass, classNameProp)} style={{ gap: `${gap}px` }}>{children}</As>
    )
}