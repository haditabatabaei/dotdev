import styles from './box.module.scss';

function List({ as: As = 'ul', children }) {
    return <As className={styles.list}>{children}</As>
}

function Content({ as: As = 'div', children }) {
    return (
        <As className={styles.content}>
            {children}
        </As>
    )
}

function Title({ as: As = 'h3', children }) {
    return <As className={styles.title}>{children}</As>
}

function Box({ as: As = 'div', children }) {
    return (
        <As className={styles.box}>
            {children}
        </As>
    )
}

Box.Title = Title;
Box.Content = Content;
Box.List = List;

export default Box;