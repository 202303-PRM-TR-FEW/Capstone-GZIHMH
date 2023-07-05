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
         description: 'This online course for you if you are in taking great digital photo and learning jow to make your photography unique and outstanding'
       }
   ],
   
  
   'person': [{
     id: 1,
     name: 'Clara Manning',
     userName: 'Izdihar',
     password: '2332332',
     isTeacher: true,
     email:'ezdiharomer@gmail.com',
     firendsList: [
       '2',
       '3'
     ]
 
 
   },
   {
     id: 2,
     name: 'Chris Kinley',
     userName: 'omer',
     password: '2332332',
     isTeacher: true,
     email:'ezdiharomer@gmail.com',
     firendsList: [
       '2',
       '3'
     ],
     courseList: [
       1, 2, 3, 4
     ]
 
 
   },
   {
     id: 3,
     name: 'Lena Gold',
     userName: 'Izdihar',
     password: '2332332',
     isTeacher: true,
     email:'ezdiharomer@gmail.com',
     firendsList: [
       '2',
       '3'
     ]
 
 
   },
   {
     id: 4,
     name: 'Mona Silver',
     userName: 'Izdihar',
     password: '2332332',
     isTeacher: true,
     email:'ezdiharomer@gmail.com',
     firendsList: [
       '2',
       '3'
     ]
 
 
   }]
   
   
 
 }
 
 
 export default db 