import './App.css'

function App() {
  return (
    <div className='w-full min-h-screen bg-custom-blue flex flex-col items-center justify-between'>
      <div className='xs:w-[85%] lg:w-[50%] h-[80%] flex flex-col items-center justify-center gap-16 mt-8'>
        <div className='flex flex-col items-center gap-8 border-b-[4px] border-white pb-2 xs:w-full md:w-fit'>
          <img src='/ant.jpg' className='w-80'/>
          <h2 className='m-0 text-2xl'>TINY STEPS, BIG REWARDS!</h2>
        </div>
        <p className='text-xl text-justify'>
          Ant is a user-friendly app designed to help you earn cashback rewards on your everyday purchases. By partnering with a wide range of retailers and service providers, Ant allows users to effortlessly accumulate cashback on transactions, making every purchase more rewarding. Ant ensures that you get the most out of your spending by putting money back in your pocket with each use.
        </p>
        {/* <p className='xs:text-left md:text-center text-xl'>
          Your tiny shopping sidekick! Snag deals, stack up cash, and watch your wallet grow with every purchase!
        </p> */}
        <div className='flex gap-6 items-center'>
          <button className='flex items-center px-2 gap-4 bg-white rounded-lg w-40 h-12'>
            <img src='/apple.png' width={25} height={25}/>
            <h4 className='m-0 font-semibold text-left text-sm text-black'>SOON ON APPLE STORE</h4>
          </button>
          <button className='flex items-center px-2 gap-4 bg-white rounded-lg w-40 h-12'>
            <img src='/google.png' width={25} height={25}/>
            <h4 className='m-0 font-semibold text-left text-sm text-black'>SOON ON PLAYSTORE</h4>
          </button>
        </div>  
      </div>
      <div className='w-full flex xs:flex-col lg:flex-row xs:items-start lg:items-center justify-center lg:h-12 xs:gap-6 lg:gap-12 mt-16 xs:pb-4 lg:pb-0 xs:pl-8 lg:pl-0'>
        <div className='flex items-center gap-4'>
          <img src='/mail.png' width={20} height={20}/>
          <h2 className='m-0'>info@ant.co.rw</h2>
        </div>
        <div className='flex items-center gap-4'>
          <img src='/phone.png' width={20} height={20}/>
          <h2 className='m-0'>+250 782 140 714</h2>
        </div>
        <div className='flex items-center gap-4'>
          <img src='/location.png' width={20} height={20}/>
          <h2  className='m-0'>KG 279 ST, Kigali Rwanda</h2>
        </div>
        <a className='cursor-pointer underline' href='https://res.cloudinary.com/ditrc0kph/image/upload/v1725462150/Privacy_Policy_mmbedz.pdf' target='_blank'>Privacy and refund policy</a>
      </div>
    </div>
  )
}

export default App
