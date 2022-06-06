import './cabins-item.styles.scss';

const CabinsItem = ({  cabin }) => {
    const { imageUrl, title } = cabin;
    return (
    <div className='hero-container'>
      <div  className='cabin container'>
           <h2>{title}</h2>
           <p>Start your nature practive today.</p>
         <div className='background-img'
          style={{ backgroundImage: `url(${imageUrl})`,
          }} 
        />
     </div>
</div>
)}

export default CabinsItem

