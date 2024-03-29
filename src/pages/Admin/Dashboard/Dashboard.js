import React, { useContext, useEffect, useState } from "react";
import style from "./styles.module.css";
import { useNavigate } from "react-router";
import budayaAPI from "../../../api/budayaAPI";
import authAPI from "../../../api/authAPI";
import { routes } from "../../../configs/routes";
import { AdminContext } from "../../../context/AdminContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faSignOut, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Table from "../../../components/fragments/Table";
import ModalDelete from "../../../components/fragments/ModalDelete/ModalDelete";
import Pagination from "../../../components/elements/Pagination";
import EditBudaya from "../../../components/fragments/EditBudaya";
import { useSearchParams } from "react-router-dom";

export default function Dashboard({children}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const edit = searchParams.get("editBudaya");
  const { admin, setAdmin } = useContext(AdminContext);
  const [openDelete, setOpenDelete] = useState(false);
  const [deletedData, setDeletedData] = useState(null);

  const [pageData, setPageData] = useState({
    isLoading: false,
    rowData: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [navigation, setNavigation] = useState({
    hasNext: false,
    hasPrev: false,
    totalPages: 0,
    totalRows: 0,
  });
  const [editData, setEditData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await budayaAPI.getBudayaPage(10, currentPage);
      if (res.data.sucess) {
        setPageData({
          isLoading: false,
          rowData: res.data.data,
          size: res.data.cursor.size,
        });
        setNavigation({
          hasNext: res.data.cursor.hasNext,
          hasPrev: res.data.cursor.hasPrev,
          totalPages: res.data.cursor.totalPages,
          totalRows: res.data.cursor.totalRows,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setPageData({
      isLoading: true,
      rowData: [],
    });
    fetchData();
  }, [currentPage]);

  const handleClick = (data) => {
    setEditData(data);
    navigate(routes.EDIT_BUDAYA(data.id));
  };

  const handleDelete = (id) => {
    setDeletedData(id);
    setOpenDelete(true);
  };

  const handleLogout = async () => {
    try {
      const res = await authAPI.logout();
      if (res.data.success) {
        setAdmin(null);
        navigate(routes.LOGIN_PAGE());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editColumn = (e) => {
    return (
      <div className={style.clickable} onClick={() => handleClick(e)}>
        <FontAwesomeIcon icon={faEdit} />
      </div>
    );
  };

  const deleteColumn = (e) => {
    return (
      <div className={style.clickable} onClick={() => handleDelete(e)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    );
  };

  const deleteFunction = async () => {
    try {
      const res = await budayaAPI.deleteBudaya(deletedData);
      if (res.data.success) {
        setOpenDelete(false);
        fetchData();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const rowNumber = (row) => {
    let num = row + 1;
    if (currentPage > 1) {
      num = row + 1 + (currentPage - 1) * 10;
    }

    return <div>{num}</div>;
  };

  const COLUMNS = [
    {
      Header: "No.",
      id: "row",
      Cell: ({ row }) => rowNumber(row.index),
    },
    {
      Header: "Nama Budaya",
      accessor: "nama_budaya",
    },
    {
      Header: "Provinsi",
      accessor: "ProvinsiModel.nama_provinsi",
    },
    {
      Header: "Tahun",
      accessor: "tahun",
    },
    {
      Header: "No. Registrasi",
      accessor: "penetapanNum",
    },
    {
      Header: "Edit",
      accessor: editColumn,
    },
    {
      Header: "Delete",
      accessor: ({ id }) => deleteColumn(id),
    },
  ];

  if (edit) {
    return <EditBudaya data={editData} />;
  }
    
  return (
    <>
      <section className={style.root}>
      <div className={style.header}>
        <div>
          <FontAwesomeIcon icon={faUserAlt} /> Hi, {admin?.username}!
        </div>
        <button className="btn btn-danger"onClick={handleLogout} >
          <FontAwesomeIcon icon={faSignOut}/>
        </button>
      </div>
      <div className={style.content}>
        <div>
          <p>Manajemen Kebudayaan Seni Tradisional</p>
        </div>
        <Table
          columnTable={COLUMNS}
          dataTable={pageData.rowData}
          isLoading={loading}
        />
        <Pagination
          currentPage={currentPage}
          hasNext={navigation.hasNext}
          hasPrev={navigation.hasPrev}
          setCurrentPage={setCurrentPage}
          totalPages={navigation.totalPages}
          show={true}
        />
        <ModalDelete
          show={openDelete}
          onClose={() => setOpenDelete(false)}
          deleteClick={deleteFunction}
        />
      </div>
    </section>
    </>
  )
}