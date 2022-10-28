/* eslint-disable react/no-unescaped-entities */
import styles from '../../styles/Resume.module.scss';

export default function Resume() {
    return (
        <section className={styles.container}>
            <main>
                <h1 className={styles.pageTitle}>Seyed Mohammad Hadi Tabatabaei</h1>
                <hr className={styles.divider}/>
                <div className={styles.contactContainer}>
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <address className={styles.address}>Divar, Hezardastan Co</address>
                    <a href="mailto:hadi.tabatabaei.aut@gmail.com" className={styles.email}>hadi.tabatabaei.aut@gmail.com</a>
                </div>
                <hr className={styles.divider} />
                <div className={styles.columnContainer}>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <p className={styles.text}>
                    Interested in developing scalable, maintainable, responsive and cross platform web applications using javascript frameworks such as Vue.js/Nuxt.js.
                    <br />
Core web development technologies in both front-end and back-end.
<br />

User experience and User interface concepts, OOP programming with java.
<br />
I'm enthusiastic to learn new things and looking forward to challenges and i definitely have respect for people's diversity.
                    </p>
                </div>
                <hr className={styles.divider} />
                <div className={styles.columnContainer}>
                    <h2 className={styles.sectionTitle}>
                        Work Experiences
                    </h2>
                    <div className={styles.experienceBox}>
                        <h3 className={styles.experienceTitle}>Divar | Front-End Developer | Full Time | 1 year and 8 months</h3>
                        <div className={styles.experienceDesc}>
                            Divar is an online leading classified ads company in Iran with more than 40 milion users.
                            <br />
                            Worked closely with PM, Team Leader, UX Designers, UX Engineers and other front-end developers
                            to improve user experience, add new features and apply best practices.
                            <br />
                            Notable Responsibilites:
                                <ul className={styles.experienceList}>
                                    <li>Reviewing merge requests.</li>
                                    <li>Developing features.</li>
                                    <li>Improving project system design with best practices (Design Patterns - Composable components - etc).</li>
                                    <li>Maintaining user interface design system called Khesht.</li>
                                    <li>Mentoring new developers through their first 3 months.</li>
                                    <li>Monitoring production to analyse and mitigate downtimes.</li>
                                    <li>Exploring ways to adopt Micro-Frontends</li>
                                </ul>
                            Stack: React / Webpack / Express.js / Custom Developed SSR / Redis
                            <br />
                            Scale: Large
                        </div>
                    </div>
                    <div className={styles.experienceBox}>
                        <h3 className={styles.experienceTitle}>Abrodin | Front-End Leader | Full Time | 3 years </h3>
                        <div className={styles.experienceDesc}>
                            Abroadin is there to bring inspiring and innovative ideas into your educational immigration journey, to form a future where studying has no borders.
                            <br />
                            Worked closely with CoFounders, Marketing and other developers
                            to implement new software with scaleable infrastructre and implement features.
                            <br />
                            Notable Responsibilites:
                                <ul className={styles.experienceList}>
                                    <li>Developing website from scratch.</li>
                                    <li>Developing, maintaining and improving design system</li>
                                    <li>Hold meetings with other front-end devs to exchange ideas and new ways to explore</li>
                                    <li>Participate in brainstorming to extract features and general process improvements</li>
                                </ul>   
                            Stack: Vue / Nuxt
                            <br />
                            Scale: Medium
                        </div>
                    </div>
                    <div className={styles.experienceBox}>
                        <h3 className={styles.experienceTitle}>Vesal | Front-End Developer | Contract | 4 months</h3>
                        <div className={styles.experienceDesc}>
                            Vesal is leading cultural-religious media(audio) application in Iran that provides users updated, high quality audio content.
                            <br />
                            Worked closely with CoFounder and back-end developers to implement website from scracth addressing users need.
                            <br />
                            Notable Responsibilites:
                                <ul className={styles.experienceList}>
                                    <li>Implementing fault tolerant website with live audio streaming content</li>
                                    <li>Applying best practices to improve user experience</li>
                                    <li>Implement PWA</li>
                                </ul>   
                            Stack: Vue / Nuxt
                            <br />
                            Scale: Medium
                        </div>
                    </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.columnContainer}>
                    <h2 className={styles.sectionTitle}>
                        Education
                    </h2>
                    <div className={styles.experienceBox}>
                        <h3 className={styles.experienceTitle}>Bachelor of Computer Engineering</h3>
                        <div className={styles.experienceDesc}>
                            Amirkabir University of Technology | Tehran | Iran
                            <br />
                            Teaching Assistant for:
                                <ul className={styles.experienceList}>
                                    <li>Advanced Programming</li>
                                    <li>Web Development | Internet Engineering</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.columnContainer}>
                    <h2 className={styles.sectionTitle}>
                        Language Proficiency
                    </h2>
                    <div className={styles.experienceBox}>
                        <h3 className={styles.experienceTitle}>Farsi/Persian | Native </h3>
                    </div>
                    <div className={styles.experienceBox}>
                        <h3 className={styles.experienceTitle}>English | Professional Working </h3>
                        <div className={styles.experienceDesc}>
                            IELTS General training, Overall: 7
                            <br />
                            Skills:
                                <ul className={styles.experienceList}>
                                    <li>Writing: 6</li>
                                    <li>Reading: 8</li>
                                    <li>Listening: 7.5</li>
                                    <li>Speaking: 6.5</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <hr className={styles.divider} />
            </main>
        </section>
    )
}