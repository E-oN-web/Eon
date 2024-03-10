import React, { useState } from "react";
//import { SearchIcon } from '@heroicons/react';
import "../output.css";

export default function SearchButton() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleClick = () => {
    alert(`검색 유형: ${searchType}, 검색어: ${query}`);
  };

  return (
    <div className="pt-24 bg-backDark">
      <div style={{ height: '500px' }}></div>
      <div
        className="search-bar flex items-center"
        style={{ width: "600px", margin: "0 auto", border: "1px solid #ccc", borderRadius: "9999px" }}
      >
        {/* 드롭다운 버튼 스타일링 */}
        <select
          value={searchType}
          onChange={handleSelectChange}
          style={{ border: "none", 
            padding: "8px 16px", 
            margin: "-1px", // 테두리에 맞게 조정
            outline: "none", 
            borderRadius: "9999px 0 0 9999px",
            background: "white",
            appearance: "none", // 기본 스타일 제거
          }}
        >
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="author">작성자</option>
          <option value="title-content">제목 + 내용</option>
        </select>
        {/* 검색 입력란 스타일링 */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="검색어를 입력하세요"
          style={{ 
            flex: 1,
            border: "none", 
            padding: "8px",
            outline: "none" 
          }}
        />
        {/* 검색 버튼 스타일링 */}
        <button
          onClick={handleClick}
          style={{ 
            border: "none", 
            padding: "8px 16px", 
            outline: "none", 
            borderRadius: "0 9999px 9999px 0", 
            backgroundColor: "blue", 
            color: "white",
            margin: "-1px", // 테두리에 맞게 조정
          }}
        >
          검색
        </button>
      </div>
      <div style={{ height: '200px' }}></div>
    </div>
  );
}