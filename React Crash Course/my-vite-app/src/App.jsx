// rafce
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from './Components/HomeCards'
import JobListings from './Components/JobListings'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Hero title = 'Test Title' subtitle='This is the subtitle' /> */}
      <Hero/>
      <HomeCards/>
      <JobListings/>

    
  
    
    {/* <!-- Browse Jobs --> */}
    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App