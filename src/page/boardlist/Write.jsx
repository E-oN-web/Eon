import React, { useState } from "react";
import Layout from "../../layout/Layout";
import WriteBoard from "../../components/WriteBoard";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';

const boardlist = [
  { id: 1, name: '기본 게시판' },
  { id: 2, name: '과제 게시판' },
  { id: 3, name: '모집해요' },
  { id: 4, name: 'Tom Cook' },
  // 나머지 항목들
];

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedBoard, setSelectedBoard] = useState(boardlist[0]); // 기본값 설정

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://database.com/api/posts', {
        title,
        content,
        board: selectedBoard.name, // 선택된 게시판 이름 추가
      });
      console.log(response.data);
      alert('글이 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error(error);
      alert('글 등록에 실패했습니다.');
    }
  };

  return (
    <div>
      <Layout>
        <Dropdown onSelect={(eventKey) => {
          const selected = boardlist.find(board => board.id === parseInt(eventKey));
          setSelectedBoard(selected);
        }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedBoard.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {boardlist.map((board) => (
              <Dropdown.Item key={board.id} eventKey={board.id}>
                {board.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          {/* Form Group for Title and Content */}
        </Form>
        <WriteBoard />
        <button
          // Button styles and onClick handler
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Layout>
    </div>
  );
}
