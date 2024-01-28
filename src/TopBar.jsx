import MainLogo from './assets/mainLogo.png';

const TopBar = () => {
  return (
    <div>
      <div className='absolute top-2 left-10 w-20'>
        <a href='/'><img src={MainLogo} /></a>
      </div>
      <div className='flex flex-row-reverse bg-cyan-800'>
        <div className='flex flex-row-reverse mr-12'>
          <a 
            className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
            href='/about'
          >About</a>
          <a 
            className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
            href='/how-it-works'
          >How it Works</a>
          <a 
            href='/chatbot'
            className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
          >Chatbot</a>
          <a 
            className='underline-offset-4 hover:underline-offset-8 underline transition-all text-2xl my-8 mx-6 cursor-pointer text-white'
            href='/'
          >Home</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar;