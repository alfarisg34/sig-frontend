import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import FormBudaya from '../../../components/fragments/FormBudaya';
import style from './styles.module.css';
import { routes } from '../../../configs/routes';
import Alert from '../../../components/elements/Alert';
import budayaAPI from '../../../api/budayaAPI';

export default function AddBudaya() {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append('nama_budaya', data.nama_budaya);
    formData.append('image', data.image ? data.image[0] : undefined);
    formData.append('tahun', data.tahun);
    formData.append('deskripsi', data.deskripsi);
    // formData.append('video', data.video || '');
    formData.append('JenisKebudayaanModelId', parseInt(data.jenis_budaya || '4'));
    formData.append('ProvinsiModelId', parseInt(data.idProvinsi || '1'));

    try {
      setLoading(true);
      const res = await budayaAPI.addData(formData);
      if (res.data.success) {
        setLoading(false);
        navigate(routes.DASHBOARD());
        setAlert(false);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response.data.message)
      setAlert(true);
    }
  };

  return (
    <div className={style.root}>
      <p>Tambah Data Seni Tradisional</p>
      {alert && (
        <Alert className={style.alert} message={message} />
      )}
      <FormBudaya handleSubmitForm={submitForm} isLoading={loading} />
    </div>
  )
}
