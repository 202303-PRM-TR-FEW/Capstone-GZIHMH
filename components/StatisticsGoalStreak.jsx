import React from 'react'

const StatisticsGoalStreak = ({background, title, dyas, box, imageSrc, textcolor}) => {
  return (
    
    
    
    
    <div>  



    

    <div className = {`rounded-2xl  h-30 m-2 flex flex-col ${background}`} > 






        <div className='flex flex-row justify-center items-center  '> 





            <div className='p-1'>
            <div dangerouslySetInnerHTML={{ __html: imageSrc }} />
            </div>




            <h2 className= " text-gray-600 px-2 p-3  font-bold text-md " >

              {title}

            </h2>




        </div>





        <div className= {` bg-blue-50  px-10  mb-3  mx-3   rounded-2xl ${box}`}  > 
          

              <p className=  {` text-blue-600 font-bold text-lg py-5 px-20  rounded-2xl ${textcolor}`} >
                {dyas} 
                    
              </p>

              
            

            
        </div>


        


    </div>





  
</div>
  );
};

export default StatisticsGoalStreak

