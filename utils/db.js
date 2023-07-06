const db = {
  'courses':[
     {
       id:1,
       image: '/assets/images/course (2).jpg',
       title: 'Becoming a Photographer',
       userId: 1,
       completion_ratio: '55%',
       Created: '43m',
       Rating: '4.7/5.0',
       heading:'Course description',
       price: '100$',
       description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding',

     },
     {
        id: 2,
         image: '/assets/images/course(4).jpg',
         title: 'Design Thinking 2.0',
         userId: 2,
         completion_ratio: '27%',
         Created: '43m',
         Rating: '4.7/5.0',
         heading:'Course description',
         price: '75$',
         description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
     },
     {
       id: 3,
       image: '/assets/images/course (1).jpg',
       title: 'Product Photography',
       userId: 3,
       completion_ratio: '11%',
       Created: '43m',
       Rating: '4.7/5.0',
       heading:'Course description',
       price: '50$',
       description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
       },
       {
         id: 4,
         image: '/assets/images/course (1).jpeg',
         title: 'Learn how to make portriats',
         userId: 4,
         completion_ratio: '27%',
         Created: '43m',
         Rating: '4.7/5.0',
         heading:'Course description',
         price: "75$",
         description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
       },
      {
          id:5,
          image: '/assets/images/background1.jpeg',
          title: 'Power BI',
          userId: 5,
          completion_ratio: '56%',
          Created: '1h 43m',
          Rating: '4.9/5.0',
          heading:'Course description',
          price: '24$',
          description: 'This online course is for you if you are interested in mastering Power BI',
      },
      {
          id:6,
          image: '/assets/images/background2.jpeg',
          title: 'Agile Project Management',
          userId: 6,
          completion_ratio: '56%',
          Created: '59m',
          Rating: '4.3/5.0',
          heading:'Course description',
          price: '18$',
          description: 'This online course is designed for individuals interested in learning Agile Project Management methodologies and techniques to effectively manage projects in dynamic and fast-paced environments.',
      },
      {
          id:7,
          image: '/assets/images/background3.jpeg',
          title: 'Pivot Tables',
          userId: 7,
          completion_ratio: '56%',
          Created: '1h 23m',
          Rating: '4.6/5.0',
          heading:'Course description',
          price: '24$',
          description: 'This online course is designed for individuals who want to master the art of using pivot tables in data analysis. Learn how to organize and analyze large datasets, create insightful reports, and make data-driven decisions.',
      },
      {
          id:8,
          image: '/assets/images/background4.jpeg',
          title: 'Power BI',
          userId: 8,
          completion_ratio: '56%',
          Created: '1h 17m',
          Rating: '4.1/5.0',
          heading:'Course description',
          price: '24$',
          description: 'This online course is for you if you are interested in mastering Power BI',
        },




  ],


   'person': [{
     id: 1,
     name: 'David Lee',
     userName: 'davidl',
     password: 'qwerty',
     isTeacher: true,
     email:'davidlee@example.com',
     friendsList: [
       '2',
       '3'
     ]


   },
   {
     id: 2,
     name: 'Jane Smith',
     userName: 'janesmith',
     password: 'abc123',
     isTeacher: true,
     email:'janesmith@example.com',
     friendsList: [
       '2',
       '3'
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
     email:'alexjohnson@example.com',
     friendsList: [
       '2',
       '3'
     ]


   },
   {
     id: 4,
     name: 'Emilys Davis',
     userName: 'emilyd',
     password: 'hello123',
     isTeacher: true,
     email:'emilydavis@example.com',
     friendsList: [
       '2',
       '3'
     ]






   }],




 }


 export default db