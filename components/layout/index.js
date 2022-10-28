import styles from './layout.module.scss';

import FlexContainer from '../flexContainer';

export default function Layout({ children }) {
    return (<FlexContainer
        as="section"
        alignItems="center"
        justifyContent="center"
        className={styles.container}
        column
        >
            {children}
    </FlexContainer>)
}