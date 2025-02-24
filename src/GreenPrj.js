import React, { useEffect, useState } from "react";

const GreenPrj = ({ v }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);

  // API 호출 함수
  const fetchProducts = async() => {
  useEffect(() => {
    const f = () => async () => {
      const res = await axios.get(
        `http://localhost:8080/api/products/list?{size}=&{page}`
      );
      console.log(res.data); 
      setData(res.data); // 상태 업데이트
    };
    
    
  
  }, []);
}

  return (
    <div>
      Prj,{v}
    {data.pname}
    <div>
      현재 페이지
      <input type ="text"/>
      </div>
      <div>
      페이지당 데이터의 갯수
      <input type ="text"/>
      </div>
      
    <button onClick={() => {}}>확인</button>
    </div>
  );
};
// product 전체 목록 출력
// localhost:8080/api/products/list?size=12&page=3

export default GreenPrj;
