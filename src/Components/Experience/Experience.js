import React, { Component } from 'react';
import EachExperience from './EachExperience'

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience : [
                {
                    position: 'Web Development Course Coordinator',
                    subTitle: 'Information Technology Bachelor Degrees',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                        'I lecture Information Technology undergraduate students with specialisation in Software Engineering and Networking and Cybersecurity on web security and web development tools, principles, and design architectures such as HTML5, CSS3, JavaScript, C#, ASP.NET, AngularJS, MVC, MVVM, Separation of Concerns, among others.',
                        'I prepare new materials for the course and update existing materials to ensure that they meet modern web development standards.',
                        'I handle hands-on practical sessions for web development students. During these sessions, students are required to practice the knowledge acquired during class. I also prepare the teaching materials for the weekly practical sessions.',
                        'I manage the teaching team responsible for various academic activities including tutoring, marking, etc.'
                        ]
                }
            ]
        }
    }
    
    render() {
        let experience = this.state.experience.map(e => <EachExperience 
                    position={e.position} subTitle={e.subTitle}
                    company={e.company} town={e.town}
                    country={e.country} responsibilities={e.responsibilities}/>)
        console.log(experience)
        return (
            <div>
                <h4>Work Experience</h4>
                {experience}
            </div>
        );
    }
}

export default Experience;