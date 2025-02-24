import React, { useCallback } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
  

} from "react-router-dom";


import ReadComponent from "../../components/products/ReadComponent";

const ReadPage = () => {
  const { pno, page, size } = useParams();

  const moveToModify = useCallback(
    (pno) => {
      navigate({ pathname: `/products/modify/${pno}`, search: queryStr });
    },
    [pno, page, size]
  );
  const moveToList = useCallback(() => {
    navigate({ pathname: `/products/list`, search: queryStr });
  });
  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-3xl font-extrabold">
        Todo Read Page Component{pno}
        <ModifyComponent pno={pno}></ModifyComponent>
      </div>
    </div>
  );
};

export default ReadPage;
