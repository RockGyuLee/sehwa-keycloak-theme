import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import './index.css';

const LoginForm = () => {
  return (
    <div className='form-container'>
      <div className='login-form'>
        <div className='text-input'>
          <p>아이디</p>
          <Input
            name='username'
            placeholder='아이디를 입력해주세요.'
            iconName='user'
          />
        </div>
        <div className='text-input'>
          <p>비밀번호</p>
          <Input
            name='password'
            type='password'
            placeholder='비밀번호를 입력해주세요.'
            iconName='password'
          />
        </div>
        <Button type='submit' className='btn-login'>
          로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
