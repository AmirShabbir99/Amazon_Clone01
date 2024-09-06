import React from 'react'
import './HomeScreen.css'
import Card from '../AllCards/Card.jsx'
import SingleCard from '../AllCards/SingleCard.jsx'
import img3 from '../Component/amazon_front.jpg'
import ScrollCard  from '../AllCards/ScrollCard.jsx'
import Footer from './Footer.jsx'

const HomeScreen = () => {
  return (
    <>
    <div className="Home">
    <div className="home-front-img">
      <img src={img3} alt="front" />
    </div>
    <div className="home-all-cards">
    <Card className='start' 
    heading='Game Assesories'
    img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg'
    img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg"
    img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg"
    img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg"
    title1='Headsets'
    title2='Keyboard'
    title3='Mouse'
    title4='Chair'
    ></Card>
   
   <SingleCard 
   heading='Deals in PCs'
   img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg'
   title1='PC'
   ></SingleCard>

   <Card className='start' 
   heading='Refresh your face'
   img1='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg'
   img2='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg'
   img3='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg'
   img4='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg'

   title1='Dining'
   title2='Home'
   title3='Kitchen'
   title4='Health and Beauty'
   ></Card>


<SingleCard 
  heading='Toys'
   img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg'
   title1='Toy Under $20 '
   ></SingleCard>


<SingleCard 
   heading='best-selling categories'
   img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/TopCategories/Fuji_TopCategories_Dash_2X._SY608_CB601797995_.jpg'
   title1='Bag'
   ></SingleCard>    

<Card
  heading='Gaming merchandise'
  img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_2x._SY232_CB667159060_.jpg'
  img2='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_2x._SY232_CB667159060_.jpg'
  img3='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_2x._SY232_CB667159060_.jpg'
  img4='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_2x._SY232_CB667159063_.jpg'
  title1='Apparel'
  title2='Hats'
  title3='Action Figures'
  title4='Mugs'
  ></Card>

    <SingleCard
    heading='Shop activity trackers '
    img1='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg'
    title1='Smartwatches'
    ></SingleCard>

<SingleCard
    heading='A whole new way to work'
    img1='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_758x608_2X_en_US._SY608_CB597161294_.jpg'
    title1='Work'
    ></SingleCard>

    </div>
    <ScrollCard></ScrollCard>
    <Footer></Footer>
    </div>
    </>
  )
}

export default HomeScreen