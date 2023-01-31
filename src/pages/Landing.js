import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'

function Landing() {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor provident, officia dolorum odio iure dicta distinctio, commodi ratione, quibusdam omnis. Assumenda quia, sint consectetur tenetur sequi quam architecto ullam provident nemo repellendus natus, error adipisci magni, sit aliquam iure illo ea consequatur atque modi optio cum. Corrupti, voluptates! Reiciendis.
          </p>
          <button className='btn btn-hero'>login/register</button>
        </div>
        <img src={main} alt="job hunt" className='main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing