import './about.css';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src='https://images.unsplash.com/photo-1545132147-d037e6c54cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80' alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>Flight attendant turned teacher turned full stack developer?!</p>
        <p className='a-desc'>I'm a web developer and UI/UX enthusiast with a background in education and the service industry. After 9 years of flying the friendly skies and 4 years of living my Mrs. Frizzle dreams, I am now developing and creating websites and applications.</p>
      </div>
    </div>
  );
};

export default About;
