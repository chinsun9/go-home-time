import './About.css';
import React from 'react';
import Share from './Share';

function About() {
  return (
    <div className="about">
      <p>
        집이 가고 싶은 사람들을 위한 타이머
        <br />
        <br />이 타이머는 로컬에서 setTimeout을 통해 타이머를 표현합니다. 따라서
        시간이 지남에 따라 오차가 생길 수 있습니다. 하지만 이제 10분마다
        동기화합니다
        <br />
        <br />
        source code here :{' '}
        <a
          href="https://github.com/chinsun9/go-home-time"
          target="_blank"
          rel="noreferrer"
        >
          github repo
        </a>
      </p>

      <Share />
    </div>
  );
}

export default About;
