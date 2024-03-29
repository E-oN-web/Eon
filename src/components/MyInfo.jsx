import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Myinfo() {
  const [userData, setUserData] = useState({ name: '', cohort: '', email: '', studentnum:'', phonenum:'' });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('');
        setUserData(response.data); // 데이터베이스에서 받은 데이터로 상태 업데이트
      } catch (error) {
        console.error('Fetching data failed', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-backDark text-button">
      <div  className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white-900">
          내 정보
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-semiTitle"></p>
      </div>
      <div className="mt-6 border-t border-hori">
        <dl className="divide-y divide-hori">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-hover">
              이름
            </dt>
            <dd className="mt-1 text-sm leading-6 text-semiTitle sm:col-span-2 sm:mt-0">
              {userData.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-hover">
              학번
            </dt>
            <dd className="mt-1 text-sm leading-6 text-semiTitle sm:col-span-2 sm:mt-0">
              {userData.studentnum}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-hover">
              기수
            </dt>
            <dd className="mt-1 text-sm leading-6 text-semiTitle sm:col-span-2 sm:mt-0">
              {userData.cohort}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-hover">
              전화번호
            </dt>
            <dd className="mt-1 text-sm leading-6 text-semiTitle sm:col-span-2 sm:mt-0">
              {userData.phonenum}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-hover">
              이메일
            </dt>
            <dd className="mt-1 text-sm leading-6 text-semiTitle sm:col-span-2 sm:mt-0">
              {userData.email}
            </dd>
          </div>
          
        </dl>
      </div>
    </div>
  );
}
