import './Share.css';
import React, { useEffect, useRef, useState } from 'react';
import { Power3, TimelineLite } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const C = CSSPlugin;

const baseURL = 'https://chinsun9.github.io/go-home-time/';

function Share() {
  const [shareLink, setShareLink] = useState(baseURL);
  const [isEditAbleMsg, setIsEditAbleMsg] = useState(false);
  const [isEditAbleTime, setIsEditAbleTime] = useState(false);
  const [time, setTime] = useState('18:00');
  const [msg, setMsg] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const onTimeCheckboxChangeHandler = () => {
    setIsEditAbleTime(!isEditAbleTime);
  };

  const onMsgCheckboxChangeHandler = () => {
    setIsEditAbleMsg(!isEditAbleMsg);
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
  };

  const onMsgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMsg(inputValue);
  };

  useEffect(() => {
    let shareUrl = baseURL + time.replace(':', '');
    shareUrl =
      isEditAbleMsg && msg.length > 1
        ? `${shareUrl}?m=${Buffer.from(msg, 'utf-8').toString('base64')}`
        : shareUrl;
    setShareLink(shareUrl);
  }, [time, msg, isEditAbleMsg]);

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
        <label htmlFor="ableTime">
          <input
            type="checkbox"
            name="ableTime"
            id="ableTime"
            checked={isEditAbleTime}
            onChange={onTimeCheckboxChangeHandler}
          />
          <span>퇴근시간</span>
        </label>

        {isEditAbleTime && (
          <input type="time" value={time} onChange={onTimeChangeHandler} />
        )}
      </div>

      <div className="share__checkbox">
        <label htmlFor="ableMsg">
          <input
            type="checkbox"
            name="ableMsg"
            id="ableMsg"
            checked={isEditAbleMsg}
            onChange={onMsgCheckboxChangeHandler}
          />
          <span>메시지</span>
        </label>

        {isEditAbleMsg && (
          <input type="text" value={msg} onChange={onMsgChangeHandler} />
        )}
      </div>
    </div>
  );
}

export default Share;
