import React from 'react';
import style from './styles.module.css';
import PropTypes from 'prop-types';

export default function MapsDesc(props) {
  // const { high, low } = props;
  let high = 86.08023282;
	let low = 24.21388482;

  const roundedHigh = Math.round(high);
  const roundedLow = Math.round(low);

  return (
    <div className={style.root}>
      <div className={style.header}>LEGENDA</div>
      <div className={style.desc}>
        <div>
          <div className={style.high}/>
          <p><span> {'>'} {roundedHigh || '...'}</span> Budaya</p>  
        </div>
        <div>
          <div className={style.between}/>
          <p><span>{roundedLow || '...'} - {roundedHigh || '...'}</span> Budaya</p>  
        </div>
        <div>
          <div className={style.low}/>
          <p><span>{'<'} {roundedLow || '...'}</span> Budaya</p>  
        </div>
      </div>
    </div>
  )
}

MapsDesc.defaultProps = {
  high: 0,
  low: 0 
};

MapsDesc.propTypes = {
  high: PropTypes.number,
  low: PropTypes.number
}