import KorailLogo from '@/assets/images/korail_logo.png';
import MainBackground from '@/assets/images/main_background.png';
import Background from '@/components/common/Background';
import LoginForm from '@/components/common/login/LoginForm';

import './App.css';

function App() {
  return (
    <main className='login-page'>
      <section className='image-container'>
        <Background backgroundImage={MainBackground} />
        <div className='background-overlay-top'></div>
        <div className='background-text'>
          <div className='background-text-large-section'>
            <p className='background-text-large'>대한민국 미래를 이끌어가는</p>
            <p className='background-text-large'>국민의 한국철도</p>
          </div>
          <div className='background-text-small-section'>
            <p className='background-text-small'>
              우리 철도는 눈부신 발전을 거듭했습니다.
            </p>
            <p className='background-text-small'>
              전국 방방곡곡 철길을 따라 사람과 물자를 연결하고, 세계 다섯 번째로
              고속철도를 운영하며 대한민국 성장을 견인했습니다.
            </p>
            <p className='background-text-small'>
              앞으로도 한국철도는 국민 모두를 위한 공공철도로서 대한민국 철도의
              미래를 이끌어 가겠습니다.
            </p>
          </div>
        </div>
      </section>
      <section className='login-container'>
        <div className='service-title'>
          <img
            src={KorailLogo}
            className='service-title-logo'
            alt='KORAIL 로고'
            decoding='async'
          />
          <p className='service-title-text'>신호설비종합분석시스템</p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}

export default App;
