import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/elements/SearchBar';
import Maps from '../../components/fragments/Maps';
import styles from './styles.module.css';
import feature from '../../data/features.json';
import ListBudaya from '../../components/fragments/ListBudaya';
import provinceAPI from '../../api/provinceAPI';
import budayaAPI from '../../api/budayaAPI';
import DetailBudaya from '../../components/fragments/DetailBudaya';
import { useNavigate } from 'react-router';
import { routes } from '../../configs/routes';
import { useSearchParams } from 'react-router-dom';
// import { provincePinData } from "../../data/Data";
import NavbarUser from '../../components/elements/NavbarUser';
import MapsDesc from '../../components/fragments/MapsDesc/MapsDesc'

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get('id'));
  const idBudaya = parseInt(searchParams.get('idBudaya'));
  const [locationName, setlocationName] = useState('');
  const [openResult, setOpenResult] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataBudaya, setDataBudaya] = useState([]);

  const fetchData = async () => {
    const res = await provinceAPI.getProvinces();
    const resBudaya = await budayaAPI.getAllBudaya();
    setDataProvinsi(res.data.data);
    setDataBudaya(resBudaya.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleClickLocation = (id, name) => {
    navigate(routes.LIST_BUDAYA(id));
    setlocationName(name);
  };

  const handleClickResult = (id) => {
    navigate(routes.DETAIL_BUDAYA(id))
  };

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (keyword !== '') {
      setFilteredResult(() => {
        let result = [];
        result = dataBudaya.filter((budaya) => {
          console.log(budaya)
          return budaya.nama_budaya?.toLowerCase().includes(keyword.toLowerCase())
        })
        return result
      });
      setOpenResult(true);
    }
  };

  const renderContent = () => {
    if (id) {
      return (
        <ListBudaya handleClickBudaya={handleClickResult} name={locationName} />
      );
    } if (idBudaya) {
      return (
        <DetailBudaya />
      );
    }
  }

  return (
    <>
    <NavbarUser/>
    <div onClick={() => setOpenResult(false)}>
      <div className={styles.content}>
        <SearchBar
          onClickResult={handleClickResult}
          openResult={openResult}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          resultData={filteredResult}
        />
        {renderContent()}
        {/* <MapsDesc high={dataCalc.high} low={dataCalc.low}/> */}
        <MapsDesc/>
      </div>
      <Maps
        data={dataProvinsi}
        // data={provincePinData}
        geoJson={feature}
        handleClick={handleClickLocation}
      />
    </div>
    </>
  )
}
