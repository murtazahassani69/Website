import React from 'react';
import '../../../css/Storecentral.css';
import OwlCarousel from "react-owl-carousel3";

function ShiftPictures() {
  const responsive={
      0:{
          items:1
      },
      500:{
        items:2
      },
      768:{
        items:3
      },
      992:{
        items:4
      },
      1200:{
          items:5
      }
  }
  return (
    <div className='store-central-carousContent'>
        <OwlCarousel 
            className="owl-theme"
            loop  dotsContainer={false} dots={false} autoplay smartSpeed={1500}  nav
            responsive={responsive}
        >
              <ShiftCard src='https://images.unsplash.com/photo-1548877699-755d4d9a19af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                    alt='mode1' details='Oh My Dior Slogan Sweater In Pink'/>
              <ShiftCard src='https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='mode2' details='Alvia Faux Leather Leggings In Red'/>
              <ShiftCard src='https://images.unsplash.com/photo-1576185055363-6d7c88000919?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt='mode3' details='Man Jean Clothes In Black'/>
              <ShiftCard src='https://images.unsplash.com/photo-1586978217600-ecf6c8e12621?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='mode4' details='Winter Pull In Black'/>
              <ShiftCard src='https://images.unsplash.com/photo-1587316490720-40572a9afede?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='mode5' details='Pants And Tsirt In Black'/>
              <ShiftCard src='https://images.unsplash.com/photo-1594321790594-7488598b93b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                  alt='mode6' details='Mixte Black And White Shoes'/>
              <ShiftCard src='https://images.unsplash.com/photo-1583759136431-9d70db2eb04c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt='mode7' details='Summer Tsirt In White'/>
              <ShiftCard src='https://images.unsplash.com/photo-1603217040830-34473db521a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='mode8' details='Complet Clothes Jean, Summer Tsirt And Shoes'/>
              <ShiftCard src='https://images.unsplash.com/photo-1534445810636-67e8b1dbf706?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='mode9' details='New SkyBlue Clothes'/>
              <ShiftCard src='https://images.unsplash.com/photo-1528841684330-994c5cca9d69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='mode10' details='Jacket and Tsirt Black and White'/>
              
        </OwlCarousel>
    </div>
  );
}

function ShiftCard({src, alt, details}){
  return(
          <a href='#'><div className='store-central-card'> 
            <div className='store-central-shiftImg'>
                <img src={src} alt={alt} className="store-central-carouselImg" />
            </div> 
            <span>{details}</span>
          </div></a>
  )
}

function FourSection(){
  return(
    <div className='store-central-section'>
        <div className='store-central-fourSection'>
            <FourCard src='https://images.unsplash.com/photo-1548877699-755d4d9a19af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <FourCard src='https://images.unsplash.com/photo-1528841684330-994c5cca9d69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <FourCard src='https://images.unsplash.com/photo-1583759136431-9d70db2eb04c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <FourCard src='https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        </div>
    </div>
  )
}

function FourCard({src}){
  return(
          <a href='#' className='store-central-fourCard'>
              <img className='store-central-fourCard_img' src={src} alt='Picture' />
              <div className='store-central-fourCard_hover'>
                  <div className='store-central-heart'>&#10084;</div>
                  <p className='store-central-sms'>&#x1F5E8;</p>
              </div>
          </a>
  )
}

function NewProducts(){
    return(
      <div className='store-central-allNew' >
        <div className='store-central-newProducts'>
            <NewCard src='https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
            alt='Picture' btnTxt='NEW IN'/>
             <NewCard src='https://images.unsplash.com/photo-1583759136431-9d70db2eb04c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
            alt='Picture' btnTxt='NEW SHOES'/>
             <NewCard src='https://images.unsplash.com/photo-1603217040830-34473db521a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
            alt='Picture' btnTxt='NEW CLOTHES' />
        </div>
      </div>
    )
}

function NewCard({src, alt, btnTxt}){
  return(
        <a href='#' className='store-central-new'>
            <div className='store-central-newImg'><img src={src} alt='' /></div>
            <button>{btnTxt}</button>
        </a>
  )
}

function Central() {
  return (
      <div>
          <NewProducts />
          <FourSection/>
          <ShiftPictures />
      </div>
  );
}

export default Central;