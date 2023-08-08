import { useRouter } from 'next/router';
export async function getServerSideProps({ query }) {
    const { id } = query
    
    // Fetch course data based on id 
    
    return {
      props: {
        course 
      }   
    }  
  }