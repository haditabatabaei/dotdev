/* eslint-disable react/no-unescaped-entities */
import styles from '../../styles/Resume.module.scss';

import Box from '../../components/box';
import Divider from '../../components/divider';
import FlexContainer from '../../components/flexContainer';
import Meta from '../../components/meta';

export default function Resume() {
    return (
        <section className={styles.container}>
            <Meta title="Resume" description="Resume" />
            <FlexContainer as="main" column>
                <h1 className={styles.pageTitle}>Seyed Mohammad Hadi Tabatabaei</h1>
                <Divider />
                <FlexContainer alignItems='center' className={styles.contactContainer}>
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <address className={styles.address}>Divar, Hezardastan Co</address>
                    <a href="mailto:hadi.tabatabaei.aut@gmail.com" className={styles.email}>hadi.tabatabaei.aut@gmail.com</a>
                </FlexContainer>
                <Divider />
                <FlexContainer column>
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
                </FlexContainer>
                <Divider />
                <FlexContainer column>
                    <h2 className={styles.sectionTitle}>
                        Work Experiences
                    </h2>
                    <Box>
                        <Box.Title>Divar | Front-End Developer | Full Time | 1 year and 8 months</Box.Title>
                        <Box.Content>
                            Divar is an online leading classified ads company in Iran with more than 40 milion users.
                            <br />
                            Worked closely with PM, Team Leader, UX Designers, UX Engineers and other front-end developers
                            to improve user experience, add new features and apply best practices.
                            <br />
                            Notable Responsibilites:
                            <Box.List>
                                <li>Reviewing merge requests.</li>
                                <li>Developing features.</li>
                                <li>Improving project system design with best practices (Design Patterns - Composable components - etc).</li>
                                <li>Maintaining user interface design system called Khesht.</li>
                                <li>Mentoring new developers through their first 3 months.</li>
                                <li>Monitoring production to analyse and mitigate downtimes.</li>
                                <li>Exploring ways to adopt Micro-Frontends</li>
                            </Box.List>
                            Stack: React / Webpack / Express.js / Custom Developed SSR / Redis
                            <br />
                            Scale: Large
                        </Box.Content>
                    </Box>
                    <Box>
                        <Box.Title>Abrodin | Front-End Leader | Full Time | 3 years </Box.Title>
                        <Box.Content>
                            Abroadin is there to bring inspiring and innovative ideas into your educational immigration journey, to form a future where studying has no borders.
                            <br />
                            Worked closely with CoFounders, Marketing and other developers
                            to implement new software with scaleable infrastructre and implement features.
                            <br />
                            Notable Responsibilites:
                            <Box.List>
                                <li>Developing website from scratch.</li>
                                <li>Developing, maintaining and improving design system</li>
                                <li>Hold meetings with other front-end devs to exchange ideas and new ways to explore</li>
                                <li>Participate in brainstorming to extract features and general process improvements</li>
                            </Box.List>
                            Stack: Vue / Nuxt
                            <br />
                            Scale: Medium
                        </Box.Content>
                    </Box>
                    <Box>
                        <Box.Title>Vesal | Front-End Developer | Contract | 4 months</Box.Title>
                        <Box.Content>
                            Vesal is leading cultural-religious media(audio) application in Iran that provides users updated, high quality audio content.
                            <br />
                            Worked closely with CoFounder and back-end developers to implement website from scracth addressing users need.
                            <br />
                            Notable Responsibilites:
                            <Box.List>
                                <li>Implementing fault tolerant website with live audio streaming content</li>
                                <li>Applying best practices to improve user experience</li>
                                <li>Implement PWA</li>
                            </Box.List>
                            Stack: Vue / Nuxt
                            <br />
                            Scale: Medium
                        </Box.Content>
                    </Box>
                </FlexContainer>
                <Divider />
                <FlexContainer column>
                    <h2 className={styles.sectionTitle}>
                        Education
                    </h2>
                    <Box>
                        <Box.Title>Bachelor of Computer Engineering</Box.Title>
                        <Box.Content>
                            Amirkabir University of Technology | Tehran | Iran
                            <br />
                            Teaching Assistant for:
                            <Box.List>
                                <li>Advanced Programming</li>
                                <li>Web Development | Internet Engineering</li>
                            </Box.List>
                        </Box.Content>
                    </Box>
                </FlexContainer>
                <Divider />
                <FlexContainer column>
                    <h2 className={styles.sectionTitle}>
                        Language Proficiency
                    </h2>
                    <Box>
                        <Box.Title>Farsi/Persian | Native </Box.Title>
                    </Box>
                    <Box>
                        <Box.Title>English | Professional Working </Box.Title>
                        <Box.Content>
                            IELTS General training, Overall: 7
                            <br />
                            Skills:
                            <Box.List>
                                <li>Writing: 6</li>
                                <li>Reading: 8</li>
                                <li>Listening: 7.5</li>
                                <li>Speaking: 6.5</li>
                            </Box.List>
                        </Box.Content>
                    </Box>
                </FlexContainer>
                <Divider />
            </FlexContainer>
        </section>
    )
}