import { ItemDescriptionType } from '../../../ts-types';
import  './SingleSamorez.css';


export const SingleSamorez = (props: ItemDescriptionType) => {

  return (

    <div className='singleItemWrapper'>
      
      <h3 className='itemName' >{props.name}</h3>
      <div className='itemVideoWrapper'>
        <iframe src={props.linkToVideo} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
      </div>
      <h4>Цена: </h4>
      <div className='price-amountDiv' >100 штук - <span className='priceSpan'>{props.price}</span> рублей</div>
      <div className='price-amountDiv'>1 кг ({props.numberInKG} штук) - <span className='priceSpan'>{props.priceKG}</span> рублей</div>
      <h4>В наличии: </h4>
      <div className='price-amountDiv'>{props.amount} штук</div>
      <div className='price-amountDiv'>{props.amountKG} кг</div>
      
    </div>
  )
}

export default SingleSamorez;
