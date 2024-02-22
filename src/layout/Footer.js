import React from 'react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import IconLoad from '../components/IconLoad';

const Footer = ({ ratio1, ratio2, ratio3 }) => {
  return (
    <footer style={{ background: '#222222', display: 'flex' }}> {/* 배경색 추가 */}
      <div style={{ flex: 48, lineHeight: '1.5' }}> {/* 비율 조정: ratio1, 줄마다 간격 조정 */}
        <div>
          <div style={{ height: '10px' }}></div> 
          <h1 style={{ fontSize: '150%' }}>Eon Website</h1> {/* 폰트 크기 조정 */}
          <div style={{ height: '20px' }}></div> 
          <p></p>
          <div style={{ height: '10px' }}></div>
          <p>수원캠퍼스  |  (16227) 경기도 수원시 영통구 광교산로 154-42</p>
          <p>031-249-9114</p>
          <p>서울캠퍼스(03746) 서울특별시 서대문구 경기대로 9길 24</p>
          <p>02-390-5114</p>
        </div>
        <hr style={{ borderTop: '1.5px solid #ccc', margin: '15px 0' }} /> {/* 회색선 */}
      </div>
      
      <div style={{ flex: 2, lineHeight: '3' }}> {/* 비율 조정: ratio3, 줄마다 간격 조정 */}
        <div style={{ height: '10px' }}></div> 
        {/* <h3 style={{ fontSize: '150%' }}></h3> */}
        <p></p>
        
      </div>

      <div style={{ flex: 13, lineHeight: '3' }}> {/* 비율 조정: ratio2, 줄마다 간격 조정 */}
        <div style={{ height: '10px' }}></div> 
        {/* <h2 style={{ fontSize: '150%' }}>게시판</h2> */}
        {/* <div style={{ height: '20px' }}></div> */}
        <p>전체게시판</p>
        <p>기본게시판</p>
        <p>과제게시판</p>
        <p>갤러리게시판</p>
      </div>

      <div style={{ flex: 17, lineHeight: '3' }}> {/* 비율 조정: ratio3, 줄마다 간격 조정 */}
        <div style={{ height: '10px' }}></div> 
        {/* <h3 style={{ fontSize: '150%' }}></h3> */}
        <p>모집해요</p>
        
      </div>
      <div style={{ flex: 20, lineHeight: '2' }}> {/* 비율 조정: ratio3, 줄마다 간격 조정 */}
        <div style={{ height: '10px' }}></div> 
        <h3 style={{ fontSize: '150%' }}>SNS</h3>
        <p></p>
        <IconLoad/>
      </div>
      <ScrollToTopButton/>
      <div style={{ height: '400px' }}></div> 
    </footer>
  );
};

export default Footer;
