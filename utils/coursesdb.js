//the data for firebase//
export const initialUsers = [
    //astronomy//
    {
        name: "Phil Plait",
        country: "USA",
        email: "Phil Plait@gmail.com",
        username: "Phil Plait",
        profilePicture: "",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    }, //astronomy//
    //Python
    {
        name: "Alex The Analyst",
        country: "USA",
        email: "alexanalyst@gmail.com",
        username: "alextheanalyst",
        profilePicture: "",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    },
    //python//

    //react//
    {
        name: "Dave Gray",
        country: "Usa",
        email: "DaveGray@gmail.com",
        userName: "Dave Gray",
        profilePicture: " ",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    },
    //react//

    //Drawing//
    {
        name: "Riven Phoenix",
        country: "Canada",
        email: "rivanphoenix@gmail.com",
        username: "rivanphoenix",
        profilePicture: "",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    },
    //Drawing//

    //GermMany HUman SOurce//
    {
        name: "Armin Trost",
        country: "Germany",
        email: "armintrost@gmail.com",
        username: "armintrost",
        profilePicture: "",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    },
    //GermMany HUman SOurce//

    //Nina drawing//
    {
        name: "Nina Blangstrup",
        country: "Canada",
        email: "ninablangstrup@gmail.com",
        username: "Nina",
        profilePicture: "",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    },
    //Nine Drawing//

    //Rafy Marketer//
    {
        name: "Azharul Rafy",
        country: "India",
        email: "azharulrafyp@gmail.com",
        username: "Azharul",
        profilePicture: "",
        coursesWatched: [],
        coursesSaved: [],
        friends: [],
        wordsSearched: [],
        isTutor: true,
    },
    //Rafy Marketer//
];
const initialTutorDetails = [
    //astronomy
    {
        tutorId: "",
        experties: [],
        teachingExperience: "12 years",
        coursePublished: [],
    }, //astronomy//
    //python//
    {
        tutorId: "",
        experties: [],
        teachingExperience: "7 years",
        coursePublished: [],
    },
    //python//
    //react//
    {
        tutorId: "",
        experties: [],
        teachingExperience: "15 years",
        coursePublished: [],
    },
    //Drawing//
    {
        tutorId: "",
        experties: [],
        teachingExperience: "2 years",
        coursePublished: [],
    },
    //Drawing//

    //germany human source//
    {
        tutorId: "",
        experties: [],
        teachingExperience: "9 years",
        coursePublished: [],
    },
    //germany human source //

    //Nina Drawing//
    {
        tutorId: "",
        experties: [],
        teachingExperience: "10 years",
        coursePublished: [],
    },
    //Nina Drawing//

    //Rafy Marketer//
    {
        tutorId: "",
        experties: [],
        teachingExperience: "2 years",
        coursePublished: [],
    },
    //Rafy Marketer//
];

export const initialCourses = [
    //astronomy//
    {
        title: "Crash Course Astronomy",
        description: 'Welcome to the first episode of Crash Course Astronomy. Your host for this intergalactic adventure is the Bad Astronomer himself, Phil Plait. We begin with answering a question: "What is astronomy?"',
        totalDuration: "08:04:33",
        rate: 4.3,
        tutorId: "",
        thumbnail: "",
        price: 30,
        productId: "",
        // categories: [],
        level: "",
    },
    //astronomy//

    //python
    {
        title: "Python for Beginners",
        description: "In this series we will be walking through everything you need to know to get started in Python!",
        totalDuration: "01:40:33",
        rate: 3.9,
        tutorId: "",
        thumbnail: "",
        price: 30,
        productId: "",
        // categories: [],
        level: "",
    },
    //python

    //react//
    {
        title: "React JS Full Course for Beginners",
        description: "This React JS Full Course for Beginners is an all-in-one beginner tutorial and complete course full of nearly 9 hours of React JS code and instruction to level up your programming skills",
        totalDuration: "01:40:33",
        rate: 4.5,
        tutorId: "",
        price: 45,
        productId: "",
        // categories: [],
        level: "",
    },
    //React//
    //Drawing//
    {
        title: "Figure Drawing For Beginners Step by Step by Riven Phoenix",
        description: "As an accomplished art instructor with a wealth of experience and a passion for teaching, I have dedicated myself to helping aspiring artists and professionals hone their skills and reach their full potential. With my easy-to-follow courses and innovative tools, I have inspired thousands of students in over 172 countries to pursue their artistic dreams.",
        totalDuration: "27:19",
        rate: 4.1,
        tutorId: "",
        thumbnail: "",
        price: 24,
        productId: "",
        // categories: [drawing],
        level: "",
    },
    //drawing//

    //germany human source//
    {
        title: "Introduction to Human Resources Management",
        description: "What is Human Resource Management (HRM)? Which Megatrends determine future challenges in HRM? What are key fields of action in HRM?.",
        totalDuration: "03:33:01",
        rate: 3.9,
        tutorId: "",
        thumbnail: "",
        price: 30,
        productId: "",
        // categories: [],
        level: "",
    },
    //germany human source//

    //Nina Drawing//
    {
        title: "Learn how to Draw Realistic Portraits",
        description: "My name is Nina Blangstrup and art is one of my great passions! This course is filled with art, drawings, portraits and tutorials",
        totalDuration: "03:33:01",
        rate: 3.5,
        tutorId: "",
        thumbnail: "",
        price: 18,
        productId: "",
        // categories: [drawing],
        level: "",
    },
    //Nina Drawing//

    //rafy Marketer//
    {
        title: "MailChimp Email Marketing for Beginners",
        description: "Email Marketing is one of the most effective marketing process most of the businesses, bloggers, content creators and influencers using and MailChimp is one of the best easy Email Marketing Platform peoples are using for the email marketing campaigns.",
        totalDuration: "03:33:01",
        rate: 4.9,
        tutorId: "",
        thumbnail: "",
        price: 25,
        productId: "",
        // categories: [marketing],
        level: "Professional",
    },
    //rafy Marketer//
];
export const initialLessons = [
    //astronomy//
    {
        courseId: "",
        link: "https://youtu.be/0rHUDWjR5gg",
        duration: "00:12:02", // Format: 'hh:mm:ss'
        linkTitle: "Lecture 01",
        linkSectionNumber: 1,
        linkSectionName: "Introduction",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://youtu.be/pHOH7UfOhbE",
        duration: "00:13:07", // Format: 'hh:mm:ss'
        linkTitle: "Naked Eye Observations: Crash Course Astronomy #2",
        linkSectionNumber: 2,
        linkSectionName: "Crash Course Astronomy #2",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://youtu.be/01QWC-rZcfE",
        duration: "00:09:29", // Format: 'hh:mm:ss'
        linkTitle: "Cycles in the Sky: Crash Course Astronomy #3",
        linkSectionNumber: 2,
        linkSectionName: "Crash Course Astronomy #3",
        linkSubsectionNumber: 2,
    },
    //astronomy//

    //python//
    {
        courseId: "",
        link: "https://youtu.be/WUeBzT43JyY",
        duration: "00:10:02", // Format: 'hh:mm:ss'
        linkTitle: "Lecture 01",
        linkSectionNumber: 1,
        linkSectionName: "Introduction",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://youtu.be/pHOH7UfOhbE",
        duration: "00:13:07", // Format: 'hh:mm:ss'
        linkTitle: "Variables in Python | Python for Beginners",
        linkSectionNumber: 2,
        linkSectionName: "What is python",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://youtu.be/ppsCxnNm-JI",
        duration: "01:49:36", // Format: 'hh:mm:ss'
        linkTitle: "Data Types in Python | Python for Beginners",
        linkSectionNumber: 2,
        linkSectionName: "What is python",
        linkSubsectionNumber: 2,
    },
    //python//

    //react//
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=TeeAp5zkYnI",
        duraiton: "00:13:24",
        linkTitle: "React Dev Setup",
        linkSectionNumber: 1,
        linkSectionName: "intro to react",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=jzd70d0yc7E",
        duraiton: "00:11:49",
        linkTitle: "JSX",
        linkSectionNumber: 1,
        linkSectionName: "intro to react",
        linkSubsectionNumber: 2,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=XyIXMQ9SZmI",
        duraiton: "00:25:53",
        linkTitle: "React js props and props drilling",
        linkSectionNumber: 2,
        linkSectionName: "working with Components",
        linkSubsectionNumber: 13,
    },
    //react//

    //drawing//
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=HeB-HyUqy5Y",
        duration: "27:19", // Format: 'hh:mm:ss'
        linkTitle: "Lecture 01",
        linkSectionNumber: 1,
        linkSectionName: "Introduction",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=6THV8VJY-qQ",
        duration: "10:04", // Format: 'hh:mm:ss'
        linkTitle: "Figure Drawing For Beginners Step by Step 2/4 by Riven Phoenix",
        linkSectionNumber: 2,
        linkSectionName: "supplies",
        linkSubsectionNumber: 2,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=pkRYwqwlKes",
        duration: "10:45", // Format: 'hh:mm:ss'
        linkTitle: "Figure Drawing For Beginners Step by Step 3/4 by Riven Phoenix",
        linkSectionNumber: 2,
        linkSectionName: "Invention",
        linkSubsectionNumber: 3,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=pQ8oB9Ldvrc",
        duration: "18:56", // Format: 'hh:mm:ss'
        linkTitle: "Figure Drawing For Beginners Step by Step 4/4 by Riven Phoenix",
        linkSectionNumber: 2,
        linkSectionName: "Drawing the figure",
        linkSubsectionNumber: 4,
    },
    //drawing//

    //germany human source //
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=c8_avX9miag",
        duration: "00:35:57", // Format: 'hh:mm:ss'
        linkTitle: "Lecture 01",
        linkSectionNumber: 1,
        linkSectionName: "Introduction",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=c8_avX9miag",
        duration: "01:07:29", // Format: 'hh:mm:ss'
        linkTitle: "HR Strategy and Planning",
        linkSectionNumber: 2,
        linkSectionName: "What is HR",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=c8_avX9miag",
        duration: "01:49:36", // Format: 'hh:mm:ss'
        linkTitle: "Talent Acquistion",
        linkSectionNumber: 2,
        linkSectionName: "What is HR",
        linkSubsectionNumber: 2,
    },
    //germany human source//

    //Nina Germany//
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=omFkGJ5fTrk",
        duration: "02:20", // Format: 'hh:mm:ss'
        linkTitle: "Lecture 01",
        linkSectionNumber: 1,
        linkSectionName: "Free Art Course - Learn how to Draw Realistic Portraits",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=01GsZZk2uz8&list=PL0eBMNAIIfZWDDuZ0_EQJAPlJ3bvqcmdx",
        duration: "12:47", // Format: 'hh:mm:ss'
        linkTitle: "Everything You Need to Know about Shading Technique",
        linkSectionNumber: 2,
        linkSectionName: "Shading Tutorial - Everything You Need to Know about Shading Technique",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=sP-oekfdfWc&list=PL0eBMNAIIfZWDDuZ0_EQJAPlJ3bvqcmdx&index=2",
        duration: "11:42", // Format: 'hh:mm:ss'
        linkTitle: "Drawing Materials for Beginners",
        linkSectionNumber: 2,
        linkSectionName: "Drawing Materials for Beginners - My Art Supply Tips",
        linkSubsectionNumber: 2,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=Krf2yguEkXk&list=PL0eBMNAIIfZWDDuZ0_EQJAPlJ3bvqcmdx&index=3",
        duration: "24:11", // Format: 'hh:mm:ss'
        linkTitle: "How to Draw a Realistic Eye with Coloured Pencils",
        linkSectionNumber: 2,
        linkSectionName: "How to Draw a Realistic Eye with Coloured Pencils",
        linkSubsectionNumber: 2,
    },
    //Nina Germany//

    //Rafy Marketer//
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=UItN1kg9U7M&list=PLQOGKy2nPhxmpm_nhiYJuGqPfjVqZiCiE",
        duration: "47:26", // Format: 'hh:mm:ss'
        linkTitle: "Lecture 01",
        linkSectionNumber: 1,
        linkSectionName: "MailChimp Email Marketing for Beginners - FULL COURSE",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=IRaCzdqUzog&list=PLQOGKy2nPhxmpm_nhiYJuGqPfjVqZiCiE&index=2",
        duration: "22:21", // Format: 'hh:mm:ss'
        linkTitle: "Mailchimp Email Newsletter Template Design Tutorial",
        linkSectionNumber: 2,
        linkSectionName: "Mailchimp Email Newsletter Template Design Tutorial",
        linkSubsectionNumber: 1,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=WDPbKTFJZVQ&list=PLQOGKy2nPhxmpm_nhiYJuGqPfjVqZiCiE&index=3",
        duration: "06:15", // Format: 'hh:mm:ss'
        linkTitle: "Full FREE Email Marketing Tutorial - What we Need to & Will Learn? - Lesson 1",
        linkSectionNumber: 2,
        linkSectionName: "What we Need to & Will Learn?",
        linkSubsectionNumber: 2,
    },
    {
        courseId: "",
        link: "https://www.youtube.com/watch?v=UYm3hsSb29M&list=PLQOGKy2nPhxmpm_nhiYJuGqPfjVqZiCiE&index=4",
        duration: "11:04", // Format: 'hh:mm:ss'
        linkTitle: "What is Email Marketing - Can Spam Law & How Does it Works? - Lesson 2",
        linkSectionNumber: 2,
        linkSectionName: "Can Spam Law & How Does it Works?",
        linkSubsectionNumber: 3,
    },
    //Rafy Marketet//
];