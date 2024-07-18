import React from 'react';

const Hero_section = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col justify-start items-center h-screen" style={{ paddingLeft: '100px', paddingRight: "100px" }}>
      <div >
        <img src={require('../images/lemon.png')} alt='lemon' className='absolute left-10' />
        <img src={require('../images/leaf.png')} alt='leaf' className='absolute right-10 hidden sm:block'/>
      </div>

      <div className="relative">
        <div className="flex top-64 -left-16 sm:-left-12 sm:top-80 md:top-72 md:right-32 justify-center items-center relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 -rotate-6 z-20">
                <img src={require('../images/green.png')} alt="Green Breezer" className="w-32 h-64 sm:w-48 sm:h-96" />
            </div>
            <div className="absolute left-1/2 transform translate-x-1/2 -translate-y-1/4.5 rotate-6 z-20">
                <img src={require('../images/orange.png')} alt="Orange Breezer" className="w-32 h-64 sm:w-48 sm:h-96" />
            </div>
        </div>


        
        <div className="text-white text-5.8xl sm:text-8xl top-36 sm:top-40 md:text-8.8xl md:top-16 lg:text-9xl font-semibold text-center relative z-10">
          <span className="text-shadow-black">BREEZER</span>
        </div>

      </div>

      <div>
        <img src={require('../images/black_fruit.png')} alt='black fruit' className='absolute left-96 sm:block hidden' />
      </div>

      <div className="relative w-full">
        <p className="absolute left-0 top-60 sm:text-2xl sm:-left-28 sm:top-60 md:top-40 md:-left-20 lg:left-0 lg:top-14 mt-6 font-semibold">
          Bacardi Breezer, Broozer for short, is a <br/> fruit-based alcoholic drink which comes <br /> in many flavours.
        </p>
      </div>


      <div className="flex relative w-full justify-center items-center mt-24">
        <div className='absolute top-96 sm:top-56 sm:-right-28 md:top-52 md:-right-20 lg:top-0 lg:right-0 right-0 flex'>
          <div className=" text-center mr-8">
            <h2 className="text-2xl font-bold">10+</h2>
            <p className='sm:text-2xl'>More than <br /> Flavors</p>
          </div>
          <div className="text-center mr-8">
            <h2 className="text-2xl font-bold">21+</h2>
            <p className='sm:text-2xl'>Year Old<br/> Can Drink</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">4%</h2>
            <p className='sm:text-2xl'>Alcohol<br /> Contain</p>
          </div>
        </div>
         
      </div>

      <div className="relative hidden sm:hidden md:top-72 lg:top-0 md:block lg:block">
        <img src={require('../images/scrollLogo.png')} alt='scroll' className=''/>
      </div>
    </div>
  );
};

export default Hero_section;
