import React, { useEffect, useState } from "react";
import { getList } from "../../api/productApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/todoApi";

const host = API_SERVER_HOST; // p267

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  console.log("여기는 product list ");
  const { page, size, moveToList, moveToRead } = useCustomMove();
  console.log("page:", page, "size", size);
  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false); // p266

  useEffect(() => {
    setFetching(true); // ✅ 데이터 가져오기 시작할 때 로딩 상태 활성화
    getList({ page, size })
      .then((data) => {
        console.log(data);
        setServerData(data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 오류:", error);
      })
      .finally(() => setFetching(false)); // ✅ 데이터 가져온 후 로딩 상태 비활성화
  }, [page, size]);

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2 p-4">
      <h1 className="text-center font-bold text-3xl">제품 목록</h1>

      {fetching ? <FetchingModal /> : null}

      <div className="flex flex-wrap mx-auto justify-center p-6">
        {(serverData.dtoList || []).map((i) => (
          <div
            key={i.pno}
            className="w-full min-w-[400px] p-2 m-2 rounded shadow-md cursor-pointer"
            onClick={() => moveToRead(i.pno)}
          >
            <div className="flex flex-col h-full">
              {/* 제품 번호 */}
              <div className="font-extrabold text-2xl p-2 w-full">{i.pno}</div>

              {/* 이미지 */}
              <div className="text-extrabold text-2xl p-2 w-full flex flex-col">
                <div className="w-full overflow-hidden">
                  <img
                    alt="product"
                    className="m-auto rounded-md w-60"
                    src={`${host}/api/products/view/s_${
                      i.uploadFileNames?.[0] || ""
                    }`}
                  />
                </div>
              </div>

              {/* 제품 정보 */}
              <div className="bottom-0 font-extrabold bg-white">
                <div className="text-center p-1">이름: {i.pname}</div>
              </div>
              <div className="bottom-0 font-extrabold bg-white">
                <div className="text-center p-1">가격: {i.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지 이동 컴포넌트 */}
      <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  );
};

export default ListComponent;
