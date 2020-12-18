import './Share.css';
import React, { useRef, useState } from 'react';
import { Power3, TimelineLite } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const C = CSSPlugin;

const baseURL = 'https://chinsun9.github.io/go-home-time/';

function Share() {
  const [shareLink, setShareLink] = useState(baseURL);
  const [isEditAble, setIsEditAble] = useState(false);
  const [time, setTime] = useState('18:00');
  const [isAnimate, setIsAnimate] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const onCheckboxChangeHandler = () => {
    setIsEditAble(!isEditAble);
  };

  const onLinkClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    const el = inputRef.current;

    el?.select();
    document.execCommand('copy');

    // 모달 1초간 뛰우기
    const tl = new TimelineLite();
    if (isAnimate) {
      return;
    }
    setIsAnimate(true);
    tl.clear()
      .fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: Power3.easeOut }
      )
      .to(modalRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: Power3.easeOut,
        delay: 1,
        onComplete: () => {
          setIsAnimate(false);
        },
      });
  };

  const onTimeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTime(inputValue);
    setShareLink(baseURL + inputValue.replace(':', ''));
  };

  return (
    <div className="share">
      <h4>링크 공유하기</h4>
      <div className="share__text">
        <input
          ref={inputRef}
          type="text"
          value={shareLink}
          onClick={onLinkClickHandler}
          spellCheck={false}
          readOnly
        />
        <div className="share__modal" ref={modalRef}>
          <span>링크를 복사했습니다.</span>
        </div>
      </div>
      <div className="share__checkbox">
        <label htmlFor="able">
          <input
            type="checkbox"
            name="able"
            id="able"
            checked={isEditAble}
            onChange={onCheckboxChangeHandler}
          />
          <span>퇴근시간</span>
        </label>

        {isEditAble && (
          <input
            type="time"
            id="appt"
            name="appt"
            value={time}
            onChange={onTimeChangeHandler}
          />
        )}
        {/* {time} */}
      </div>
    </div>
  );
}

export default Share;
