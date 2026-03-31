import React from 'react';
import userImg from '../assets/user.png';
import product from '../assets/package.png';
import rocket from '../assets/rocket.png';


const OtherStaticElements = () => {
    return (


    <div>   
        <div className='mt-25'>
            {/* Ribbon section */}
       <div className='h-50 w-full text-white bg-gradient-to-r from-[#4f39f6] via-[#9514fa] from-[#4f39f6] flex justify-evenly items-center'>
        <div className='flex flex-col items-center gap-1'>
        <h1 className='font-bold text-6xl'>50k+</h1>
        <p>Active Users</p>
        </div> 
     
        <div className="w-px h-16 bg-white/30" />
      
       <div className='flex flex-col items-center gap-1'>
       <h1 className='font-bold text-6xl'>200+</h1>
       <p>Premium Tools</p>
       </div>
      
       <div className="w-px h-16 bg-white/30" />
        
      <div className='flex flex-col items-center gap-1'>
      <h1 className='font-bold text-6xl'>4.9</h1>
      <p>Rating</p>
      </div>
      

    </div>

    {/* Section 3 steps */}
    <section>
          <div className='max-w-7xl mx-auto mt-35'>
          <div>
                 {/* Section of 3 steps */}
                <h1 className='mx-auto font-bold text-4xl text-center'>
                Get Started in 3 Steps
                </h1>
                <p className='text-center mt-4'>Start using premium digital tools in minutes, not hours.</p>
          </div>


         <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {/* no -1 */}
            <div className='border-2 border-base-300 rounded-3xl'>
               <div className='relative inline-flex'>
                 <button className='btn btn-ghost btn-circle'>
                
               </button>
               <span className='badge badge-primary badge-sm absolute 
                  top-4.5 -right-90.5 w-10 h-10 border-2 border-base-100 text-white rounded-full'>
                01
                </span> 
          
                </div>
                 <div className='p-4 mb-8'>
                    <img src={userImg} alt="" className='border-2 border-base-300 rounded-full h-20 w-20 mx-auto' />
                    <h2 className='text-center font-bold text-xl'>Create Account</h2>
                    <p className='text-center'>Sign up for free in seconds. No credit card <br />required to get started.</p>
                </div>
            </div>

                {/* no -2 */}
           
            <div className='border-2 border-base-300 rounded-3xl'>
                 <div className='relative inline-flex'>
                 <button className='btn btn-ghost btn-circle'>
                
               </button>
               <span className='badge badge-primary badge-sm absolute 
                  top-4.5 -right-90.5 w-10 h-10 border-2 border-base-100 text-white rounded-full'>
                02
                </span> 
          
               </div>
                 <div className='p-4 mb-8'>
                    <img src={product} alt="" className='border-2 border-base-300 rounded-full h-20 w-20 mx-auto' />
                    <h2 className='text-center font-bold text-xl'>Choose Products</h2>
                    <p className='text-center'>Browse our catalog and select the tools <br />
                    that fit your needs.</p>
                </div>
            </div>
  
                {/* no-3 */}
            <div className='border-2 border-base-300 rounded-3xl'>
             <div className='relative inline-flex'>
                 <button className='btn btn-ghost btn-circle'>

               </button>
               <span className='badge badge-primary badge-sm absolute 
                  top-4.5 -right-90.5 w-10 h-10 border-2 border-base-100 text-white rounded-full'>
                03
                </span> 
          
                  </div>
                   <div className='p-4 mb-8'>
                    <img src={rocket} alt="" className='border-2 border-base-300 rounded-full h-20 w-20 mx-auto'/>
                    <h2 className='text-center font-bold text-xl'>Start Creating</h2>
                    <p className='text-center'>Download and start using your premium <br /> 
                    tools immediately.</p>
                </div>
             </div>
        
             
        </div>
            </div>  
    
            
       </div>
    </section>

    {/* Transparent Pricing Section */}
    <section className='mt-35'>
        <div className='border-2 border-base-300 rounded-xl'>
          <div>
            <h1 className='text-center font-bold text-4xl mt-20'>Simple, Transparent Pricing</h1>
            <p className='text-center mt-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          {/* Three cards display membership price */}
          <div>

          </div>
        </div>

    </section>
</div> 
</div> 
    );
};

export default OtherStaticElements;