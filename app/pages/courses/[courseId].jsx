export default function course({ query }) {
    const id = query
}
export async function getServerSideProps({ query }) {
    const { id } = query
    
    // Fetch course data based on id 
    
    return {
      props: {
        course 
      }   
    }  
  }