const db = {
  'courses': [
    {
      id: 1,
      image: '/assets/images/course (2).jpg',
      title: 'Becoming a Photographer',
      user_id: 1,
      completion_ratio: 55,
      duration: 43,
      rating: 4.7,
      price: 100,
      description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding',

    },
    {
      id: 2,
      image: '/assets/images/course(4).jpg',
      title: 'Design Thinking 2.0',
      user_id: 2,
      completion_ratio: 27,
      duration: 43,
      rating: 4.7,
      price: 75,
      description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
    },
    {
      id: 3,
      image: '/assets/images/course (1).jpg',
      title: 'Product Photography',
      user_id: 3,
      completion_ratio: 11,
      duration: 43,
      rating: 4.7,
      price: 50,
      description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
    },
    {
      id: 4,
      image: '/assets/images/course (1).jpeg',
      title: 'Learn how to make portriats',
      user_id: 4,
      completion_ratio: 27,
      duration: 43,
      rating: 4.7,
      price: 75,
      description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
    },
    {
      id: 5,
      image: '/assets/images/background1.jpeg',
      title: 'Power BI',
      user_id: 5,
      completion_ratio: 56,
      duration: 103,
      rating: 4.9,
      price: 24,
      description: 'This online course is for you if you are interested in mastering Power BI',
    },
    {
      id: 6,
      image: '/assets/images/background2.jpeg',
      title: 'Agile Project Management',
      user_id: 6,
      completion_ratio: 56,
      duration: 59,
      rating: 4.3,
      price: 18,
      description: 'This online course is designed for individuals interested in learning Agile Project Management methodologies and techniques to effectively manage projects in dynamic and fast-paced environments.',
    },
    {
      id: 7,
      image: '/assets/images/background3.jpeg',
      title: 'Pivot Tables',
      user_id: 7,
      completion_ratio: 56,
      duration: 83,
      rating: 4.6,
      price: 24,
      description: 'This online course is designed for individuals who want to master the art of using pivot tables in data analysis. Learn how to organize and analyze large datasets, create insightful reports, and make data-driven decisions.',
    },
    {
      id: 8,
      image: '/assets/images/background4.jpeg',
      title: 'Power BI',
      user_id: 8,
      completion_ratio: 56,
      duration: 77,
      rating: 4.1,
      price: 24,
      description: 'This online course is for you if you are interested in mastering Power BI',
    },

    {
      id: 9,
      image: '/assets/images/uxresearch.jpeg',
      title: 'UX Research',
      user_id: 5,
      completion_ratio: 0,
      duration: 75,
      rating: 3.1,
      price: 35,
      description: 'This online course is for you if you are interested in Learning the basics of UX',
    },
    {
      id: 10,
      image: '/assets/images/uxessentials.jpeg',
      title: 'UX Essentials',
      user_id: 6,
      completion_ratio: 0,
      duration: 75,
      rating: 3.1,
      price: 35,
      description: 'This online course is for you if you are interested in Learning the basics of UX',
    },
    {
      id: 11,
      image: '/assets/images/uxforbeginners.jpeg',
      title: 'UX for Beginners',
      user_id: 7,
      completion_ratio: 0,
      duration: 75,
      rating: 3.1,
      price: 35,
      description: 'This online course is for you if you are interested in Learning the basics of UX',
    },
    {
      id: 12,
      image: '/assets/images/howtoux.jpeg',
      title: 'How to UX',
      user_id: 8,
      completion_ratio: 0,
      duration: 75,
      rating: 3.1,
      price: 35,
      description: 'This online course is for you if you are interested in Learning the basics of UX',
    },


  ],


  'person': [{
    id: 1,
    name: 'David Lee',
    userName: 'davidl',
    password: 'qwerty',
    isTeacher: true,
    email: 'davidlee@example.com',
    friendsList: [
      2, 3
    ]


  },
  {
    id: 2,
    name: 'Jane Smith',
    userName: 'janesmith',
    password: 'abc123',
    isTeacher: true,
    email: 'janesmith@example.com',
    friendsList: [
      2, 3,
    ],
    courseList: [
      1, 2, 3, 4
    ]


  },
  {
    id: 3,
    name: 'Alex Johnson',
    userName: 'alexj',
    password: 'passw0rd',
    isTeacher: true,
    email: 'alexjohnson@example.com',
    friendsList: [
      3, 4,
    ]


  },
  {
    id: 4,
    name: 'Emilys Davis',
    userName: 'emilyd',
    password: 'hello123',
    isTeacher: true,
    email: 'emilydavis@example.com',
    friendsList: [
      1, 3,
    ]
  },
  {
    id: 5,
    name: 'Chris Kinley',
    userName: 'kinley',
    password: 'hello123',
    isTeacher: true,
    email: 'chris@example.com',
    friendsList: [
      2, 4,
    ]
  },
  {
    id: 6,
    name: 'Don Draper',
    userName: 'dondon',
    password: 'hello123',
    isTeacher: true,
    email: 'don@example.com',
    friendsList: [
      1, 5,
    ]
  },
  {
    id: 7,
    name: 'Ben Starter',
    userName: 'benben',
    password: 'hello123',
    isTeacher: true,
    email: 'ben@example.com',
    friendsList: [
      4, 5, 6,
    ]
  },
  {
    id: 8,
    name: 'Anna May',
    userName: 'annaanna',
    password: 'hello123',
    isTeacher: true,
    email: 'anna@example.com',
    friendsList: [
      4, 5, 6,
    ]
  },
  ],




}


export default db